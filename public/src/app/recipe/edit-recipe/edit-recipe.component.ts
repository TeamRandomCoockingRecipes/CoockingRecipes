import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { IRecipe } from '../recipe';

import { RecipeService } from '../services/recipe.service';
import { CategoryService } from '../../category/services/category.service';

@Component({
  selector: 'edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {

  private allCategories: any[];
  private editedRecipe: any = {
    title: '',
    categories: [],
    ingredients: [],
    ingredientsName: [],
    ingredientsQuantity: [],
    ingredientsUnits: [],
    preparation: '',
    imageUrls: [],
    cookingTimeInMinutes: null
  };
  private recipes: IRecipe[];
  private errorMessage: string;

  public editRecipeForm: FormGroup;

  constructor(private recipeService: RecipeService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
    private _fb: FormBuilder) { }

  changeRecipe() {
    this.assignFormValue('imageUrls');
    this.assignFormValue('ingredients');
    this.adaptToServerApi();

    this.recipeService.editRecipe(this.editedRecipe)
      .subscribe(
      recipe => {
        console.log(recipe);
      });

    this.router.navigateByUrl('/recipes');
  }

  private adaptToServerApi() {
    this.editedRecipe.ingredientsName = [];
    this.editedRecipe.ingredientsQuantity = [];
    this.editedRecipe.ingredientsUnits = [];
    for (let ingredient of this.editedRecipe.ingredients) {
      this.editedRecipe.ingredientsName.push(ingredient.name);
      this.editedRecipe.ingredientsQuantity.push(ingredient.quantity);
      this.editedRecipe.ingredientsUnits.push(ingredient.unit);
    }

    let images = [];
    for (let url of this.editedRecipe.imageUrls) {
      images.push(url.imageUrl);
    }
    this.editedRecipe.imageUrls = images;
  }

  private adaptFromServerApi() {
    let images = [];
    for (let image of this.editedRecipe.imageUrls) {
      let imageUrl = image;
      images.push({ imageUrl });
    }
    this.editedRecipe.imageUrls = images;
  }

  private assignFormValue(property: string) {
    let control = <FormArray>this.editRecipeForm.controls[property];
    this.editedRecipe[property] = control.value;
  }

  originalCategoriesUpdate() {
    console.log(`In CAtegoriesUpdate ${this.editedRecipe.categories.length}`);
    let updatedCategories = [];
    for (let i = 0, len = this.editedRecipe.categories.length; i < len; i += 1) {
      let category = this.editedRecipe.categories[i];
      updatedCategories.push(category.id);
    }

    this.editedRecipe.categories = updatedCategories;
  }

  selectCategory(ev) {
    if (ev.target.checked) {
      let category = this.allCategories.find(c => c._id === ev.target.value);
      this.editedRecipe.categories.push(category._id);
    } else {
      let index = this.editedRecipe.categories.findIndex(c => c.id === ev.target.value);
      this.editedRecipe.categories.splice(index, 1);
    }

    console.log(this.editedRecipe.categories);
  }

  getRecipes() {
    this.recipeService.getRecipes()
      .subscribe(
      recipes => this.recipes = recipes,
      error => this.errorMessage = <any>error);
  }

  getCategories() {
    this.categoryService.getCategories()
      .subscribe(
      categories => {
        this.allCategories = categories;
        for (let category of this.allCategories) {
          category.checked = false;
        }
      },
      error => this.errorMessage = <any>error);
  }

  getRecipe(id: string) {
    this.recipeService.getRecipe(id)
      .subscribe(
      recipe => {
        this.editedRecipe = recipe;
        this.editedRecipe._id = id;
        this.adaptFromServerApi();
        this.assignOriginalIngredients();
        this.assignOriginalImages();
        this.originalCategoriesUpdate();
      },
      error => this.errorMessage = <any>error);
  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        let id = params['id'];
        this.getRecipe(id);
      });

    this.getRecipes();
    this.getCategories();

    this.editRecipeForm = this._fb.group({
      title: ['', [Validators.required]],
      cookingTimeInMinutes: [null, [Validators.required]],
      preparation: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(2000)]],
      imageUrls: this._fb.array([]),
      ingredients: this._fb.array([])
    });
  }

  assignOriginalIngredients(): void {
    const control = <FormArray>this.editRecipeForm.controls['ingredients'];

    for (let ingredient of this.editedRecipe.ingredients) {
      let ingredientName = ingredient['name'];
      let ingredientQuantity = ingredient['quantity'];
      let ingredientUnit = ingredient['unit'];
      control.push(
        this._fb.group({
          name: [ingredientName, Validators.required],
          quantity: [ingredientQuantity, Validators.required],
          unit: [ingredientUnit, Validators.required],
        })
      );
    }
  }

  assignOriginalImages(): void {
    const control = <FormArray>this.editRecipeForm.controls['imageUrls'];
    for (let image of this.editedRecipe.imageUrls) {
      control.push(
        this._fb.group({
          imageUrl: [image.imageUrl, Validators.required],
        })
      );
    }
  }

  initIngredient() {
    return this._fb.group({
      name: ['', Validators.required],
      quantity: [null, Validators.required],
      unit: ['', Validators.required],
    });
  }

  addIngredient() {
    const control = <FormArray>this.editRecipeForm.controls['ingredients'];
    control.push(this.initIngredient());
  }

  removeIngredient(i: number) {
    const control = <FormArray>this.editRecipeForm.controls['ingredients'];
    control.removeAt(i);
  }

  initImageUrl() {
    return this._fb.group({
      imageUrl: ['', Validators.required]
    });
  }

  addImageUrl() {
    const control = <FormArray>this.editRecipeForm.controls['imageUrls'];
    control.push(this.initImageUrl());
  }

  removeImageUrl(i: number) {
    const control = <FormArray>this.editRecipeForm.controls['imageUrls'];
    control.removeAt(i);
  }
}

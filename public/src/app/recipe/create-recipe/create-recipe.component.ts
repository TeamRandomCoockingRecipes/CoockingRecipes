import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

import { IRecipe } from '../recipe';

import { RecipeService } from '../services/recipe.service';
import { CategoryService } from '../../category/services/category.service';

@Component({
  selector: 'create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent implements OnInit {

  private allCategories: any[];
  private newRecipe: any;
  private recipes: IRecipe[];
  private errorMessage: string;

  public createRecipeForm: FormGroup;

  constructor(private recipeService: RecipeService,
    private categoryService: CategoryService,
    private _fb: FormBuilder) { }

  createRecipe() {
    this.assignFormValue('imageUrls');
    this.assignFormValue('ingredients');
    this.newRecipe.ingredientsName = [];
    this.newRecipe.ingredientsQuantity = [];
    this.newRecipe.ingredientsUnits = [];
    for (let ingredient of this.newRecipe.ingredients) {
      this.newRecipe.ingredientsName.push(ingredient.name);
      this.newRecipe.ingredientsQuantity.push(ingredient.quantity);
      this.newRecipe.ingredientsUnits.push(ingredient.unit);
    }

    let images = [];
    for (let url of this.newRecipe.imageUrls) {
      images.push(url.imageUrl);
    }
    this.newRecipe.imageUrls = images;

    console.log(this.newRecipe);

    this.recipeService.createRecipe(this.newRecipe)
      .subscribe(
      recipe => console.log(recipe));
  }

  private assignFormValue(property: string) {
    let control = <FormArray>this.createRecipeForm.controls[property];
    this.newRecipe[property] = control.value;
  }

  selectCategory(ev) {
    if (ev.target.checked) {
      let category = this.allCategories.find(c => c._id === ev.target.value);
      this.newRecipe.categories.push(category._id);
    } else {
      let index = this.newRecipe.categories.findIndex(c => c.id === ev.target.value);
      this.newRecipe.categories.splice(index, 1);
    }
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
      categories => this.allCategories = categories,
      error => this.errorMessage = <any>error);
  }

  ngOnInit() {
    this.newRecipe = {
      title: '',
      categories: [],
      ingredients: [],
      preparation: '',
      imageUrls: [],
      cookingTimeInMinutes: null
    };
    this.getRecipes();
    this.getCategories();

    this.createRecipeForm = this._fb.group({
      title: ['', [Validators.required]],
      cookingTimeInMinutes: [null, [Validators.required]],
      preparation: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(2000)]],
      imageUrls: this._fb.array([
        this.initImageUrl(),
      ]),
      ingredients: this._fb.array([
        this.initIngredient(),
      ])
    });
  }

  initIngredient() {
    return this._fb.group({
      name: ['', Validators.required],
      quantity: [null, Validators.required],
      unit: ['', Validators.required],
    });
  }

  addIngredient() {
    const control = <FormArray>this.createRecipeForm.controls['ingredients'];
    control.push(this.initIngredient());
  }

  removeIngredient(i: number) {
    const control = <FormArray>this.createRecipeForm.controls['ingredients'];
    control.removeAt(i);
  }

  initImageUrl() {
    return this._fb.group({
      imageUrl: ['', Validators.required]
    });
  }

  addImageUrl() {
    const control = <FormArray>this.createRecipeForm.controls['imageUrls'];
    control.push(this.initImageUrl());
  }

  removeImageUrl(i: number) {
    const control = <FormArray>this.createRecipeForm.controls['imageUrls'];
    control.removeAt(i);
  }
}

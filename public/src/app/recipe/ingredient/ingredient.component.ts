import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'recipe-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent {
  @Input('groupIngredient')
  public ingredientsForm: FormGroup;
  private unitOptions: string[] = ["гр.", "мл.", "ч. л.", "с. л.", "щипка", "бр."];
}

import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  //can do this as object assignment instead of variable assignment
  // receivedName: string;
  // receivedDescription: string;

  // receivedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
    // this.recipeService.recipeSelected.subscribe(
    //   (recipe: Recipe) => {this.receivedRecipe = recipe}
    // );
  }



  // displayRecipeDetails(recipe: Recipe){
    // this.receivedName = recipe.name;
    // this.receivedDescription = recipe.description;

  //   this.receivedRecipe = recipe;
  // }

}

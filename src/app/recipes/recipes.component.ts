import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService }  from '../services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeService]
})
export class RecipesComponent implements OnInit {

  //can do this as object assignment instead of variable assignment
  // receivedName: string;
  // receivedDescription: string;

  receivedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {this.receivedRecipe = recipe}
    );
  }



  // displayRecipeDetails(recipe: Recipe){
    // this.receivedName = recipe.name;
    // this.receivedDescription = recipe.description;

  //   this.receivedRecipe = recipe;
  // }

}

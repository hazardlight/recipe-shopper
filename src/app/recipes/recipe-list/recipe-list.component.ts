import { Component, OnInit, OnDestroy } from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../../services/recipe.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  recipes: Recipe[];
  subscription: Subscription;

  //@Output() sentRecipe = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
    this.recipes = this.recipeService.getRecipes();
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  // sendRecipeToParent(recipe: Recipe){
  //   this.sentRecipe.emit(recipe);
  // }
}

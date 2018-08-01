import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from './recipe.service';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  recipeEndpoint = 'https://ng-recipe-book-c9ce0.firebaseio.com/';

  constructor(private http: Http, private recipeService: RecipeService, private authService: AuthService) { }

  storeRecipes(){
    const token = this.authService.getToken()
    return this.http.put(this.recipeEndpoint + 'recipes.json' + '?auth=' + token, this.recipeService.getRecipes());
  }
  fetchRecipes(){
    const token = this.authService.getToken()
    return this.http.get(this.recipeEndpoint + 'recipes.json' + '?auth=' + token)
    .pipe(map(
      (response: Response) => {
        const recipes: Recipe[] = response.json();
        for(let recipe of recipes){
          if (!recipe['ingredients']) {
              console.log(recipe);
              recipe['ingredients'] = [];
          }
        }
        return recipes;
      }
    ))
    .subscribe(
      (recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      }
    );
  }
}

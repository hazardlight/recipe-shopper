import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Ingredient} from '../shared/ingredient.model';
import {RecipeService} from './recipe.service';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

interface Recipe {
  name: string;
  description: string;
  imagePath: string;
  ingredients: Ingredient[];
}
@Injectable()
export class RecipeResolver implements Resolve<Recipe> {
  constructor(private recipeService: RecipeService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<Recipe> | Promise<Recipe> | Recipe{
    return this.recipeService.getRecipe(+route.params['id']);
  }
}

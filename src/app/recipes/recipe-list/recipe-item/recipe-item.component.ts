import { Component, OnInit, Input} from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../../services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  // @Input('recipe-item') recipe: {name: string, description: string};
  @Input('recipe-item') recipe: Recipe;

  //technically you're just informing ng what element was selected because the recipe-list component already has access to the recipe data
  //so you don't have to pass a Recipe obj in the emitter
  // @Output() selectedRecipe = new EventEmitter<Recipe>();

  // @Output is no longer needed because we're now communicating data via the RecipeService
  // @Output() selectedRecipe = new EventEmitter<void>();

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  selectRecipe(){
    // this.selectedRecipe.emit();

    this.recipeService.recipeSelected.emit(this.recipe);
  }
}

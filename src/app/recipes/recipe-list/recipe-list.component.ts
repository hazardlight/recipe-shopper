import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Test Recipe", "This is a Test!", "https://pixnio.com/free-images/2017/07/30/2017-07-30-07-28-59-1000x667.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

}

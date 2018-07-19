import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showShoppingList: boolean = false;
  showRecipeList: boolean = true;


  @Output() toggle = new EventEmitter<{showShopping: boolean, showRecipe: boolean}>();

  constructor() { }

  ngOnInit() {
  }

  onToggleShoppingRecipe(){
    console.log("onToggleShoppingRecipe() Fires");
    console.log("showShoppingList = ", this.showShoppingList);
    console.log("showRecipeList = ", this.showRecipeList);
    this.toggle.emit({
      showShopping: this.showShoppingList,
      showRecipe: this.showRecipeList
    });
  }

  showRecipe(){
    this.showRecipeList = true;
    this.showShoppingList = false;
    this.onToggleShoppingRecipe();
  }
  showShopping(){
    this.showRecipeList = false;
    this.showShoppingList = true;
    this.onToggleShoppingRecipe();
  }
}

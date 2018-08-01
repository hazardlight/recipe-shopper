import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ServerService} from '../services/server.service';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // showShoppingList: boolean = false;
  // showRecipeList: boolean = true;


  // @Output() toggle = new EventEmitter<{showShopping: boolean, showRecipe: boolean}>();

  constructor(private serverService: ServerService, private authService: AuthService) { }

  ngOnInit() {
  }

  onSaveRecipes(){
    this.serverService.storeRecipes().subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
  onFetchRecipes(){
    this.serverService.fetchRecipes();
  }
  onLogout(){
    this.authService.logout();
  }
  // onToggleShoppingRecipe(){
  //   console.log("onToggleShoppingRecipe() Fires");
  //   console.log("showShoppingList = ", this.showShoppingList);
  //   console.log("showRecipeList = ", this.showRecipeList);
  //   this.toggle.emit({
  //     showShopping: this.showShoppingList,
  //     showRecipe: this.showRecipeList
  //   });
  // }
  //
  // showRecipe(){
  //   this.showRecipeList = true;
  //   this.showShoppingList = false;
  //   this.onToggleShoppingRecipe();
  // }
  // showShopping(){
  //   this.showRecipeList = false;
  //   this.showShoppingList = true;
  //   this.onToggleShoppingRecipe();
  // }
}

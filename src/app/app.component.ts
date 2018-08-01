import { Component, Input, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
//
  // showShopping: boolean = false;
  // showRecipe: boolean = true;

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyBNvOu_xksyf9BXF5r-1DOvhSg8IqepdTM",
      authDomain: "ng-recipe-book-c9ce0.firebaseapp.com"
    });
    // console.log("showSopping APP ", this.showShopping);
    // console.log("showRecipe APP ", this.showRecipe);
  }

  // showComponent: boolean = true;

  // onToggleDisplay(displayData:{showShopping: boolean, showRecipe: boolean})
  // {
  //   console.log("onToggleDisplay Fires");
     // this.showShopping = displayData.showShopping;
     // this.showRecipe = displayData.showRecipe;
  // }
}

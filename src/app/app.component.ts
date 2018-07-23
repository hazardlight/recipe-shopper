import { Component, Input, OnInit } from '@angular/core';

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

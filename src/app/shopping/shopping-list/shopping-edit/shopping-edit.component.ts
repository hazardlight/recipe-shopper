import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from "../../../shared/ingredient.model";
import {ShoppingListService} from '../../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') ingredientNameRef: ElementRef;
  @ViewChild('quantityInput') quantityNameRef: ElementRef;

  // @Output() addedItem = new EventEmitter<{name:string, quantity:number}>();
  // @Output() addedItem = new EventEmitter<Ingredient>();

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  // onAddItem(){
  //   this.addedItem.emit({
  //     name: this.ingredientNameRef.nativeElement.value,
  //     quantity: this.quantityNameRef.nativeElement.value
  //   });
  // }
  onAddItem(){
    const newIngredient = new Ingredient(
      this.ingredientNameRef.nativeElement.value,
      this.quantityNameRef.nativeElement.value
    );

    // this.addedItem.emit(newIngredient);
    this.shoppingListService.addIngredient(newIngredient);
  }
}

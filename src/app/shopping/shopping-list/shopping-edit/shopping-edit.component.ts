import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from "../../../shared/ingredient.model";
import {ShoppingListService} from '../../../services/shopping-list.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  // @ViewChild('nameInput') ingredientNameRef: ElementRef;
  // @ViewChild('quantityInput') quantityNameRef: ElementRef;

  @ViewChild('f') shoppingListEditForm: NgForm;

  subscription: Subscription;

  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  // @Output() addedItem = new EventEmitter<{name:string, quantity:number}>();
  // @Output() addedItem = new EventEmitter<Ingredient>();
  shoppinglistEntry = {
  'name': '',
  'quantity': null
};

  constructor(private shoppingListService: ShoppingListService){}

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(this.editedItemIndex);
        this.shoppingListEditForm.setValue({
          name: this.editedItem.name,
          quantity: this.editedItem.quantity
        });
      }
    );
  }
  onSubmit(){
    // console.log(this.shoppingListEditForm);
    const newIngredient = new Ingredient(
      this.shoppinglistEntry.name = this.shoppingListEditForm.value.name,
      this.shoppinglistEntry.quantity = this.shoppingListEditForm.value.quantity
      // this.ingredientNameRef.nativeElement.value,
      // this.quantityNameRef.nativeElement.value
    );
    if (this.editMode) {
        this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
    }
    else{
      // this.addedItem.emit(newIngredient);
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode = false;
    this.shoppingListEditForm.reset();
  }
  onClear(){
    this.shoppingListEditForm.reset();
    this.editMode = false;
  }
  onDelete(){
    if (this.editMode) { //technically the button will not show unless we are in edit mode, but meh.
      this.shoppingListService.deleteIngredient(this.editedItemIndex);
      this.onClear();
    }
  }
  // onAddItem(){
  //   this.addedItem.emit({
  //     name: this.ingredientNameRef.nativeElement.value,
  //     quantity: this.quantityNameRef.nativeElement.value
  //   });
  // }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}

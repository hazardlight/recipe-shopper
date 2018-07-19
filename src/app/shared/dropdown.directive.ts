import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective{

  constructor() { }

//you can just call a class with class.theClassYouWantToAdd and set it to true?
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen (){
    this.isOpen = !this.isOpen;
  }

  //Having 2 click listneres: one that opens the dropdown and the other that closes it, breaks the toggle functionality
  // @HostListener('click') closeDropdown (){
  //   this.dropdownState = false;
  // }

}

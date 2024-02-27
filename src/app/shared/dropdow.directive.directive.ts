import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdowDirective]'
})
export class DropdowDirectiveDirective {

  @HostBinding('class.open') isOpen:boolean = false;

  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen;
  }

}

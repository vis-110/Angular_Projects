import { style } from '@angular/animations';
import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterAttributDirective]'
})
export class BetterAttributDirectiveDirective implements OnInit {

  //@HostBindig use pannal simply ya irukkum Hostlisterner kiila irurula long line poda avasiyam illa
  
  @HostBinding('style.backgroundColor') backgroundColor:string = 'transparent'

  constructor(private elemet:ElementRef, private render:Renderer2) {
    // this.render.setStyle(this.elemet.nativeElement, 'backgroundColor','green');

   }

  ngOnInit(): void {
  }

  @HostListener('mouseover') mouseover(moevent:Event){
    // this.render.setStyle(this.elemet.nativeElement, 'backgroundColor','green');
    this.backgroundColor = 'green';

  }

  @HostListener('mouseleave') mouseleave(moevent:Event){
    // this.render.setStyle(this.elemet.nativeElement, 'backgroundColor','transparent');
    this.backgroundColor = 'transparent'


  }
}

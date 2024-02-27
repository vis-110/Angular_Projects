import { AfterContentChecked, Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector:'[attributeDirective]'
})

export class BasicAttributedirective implements AfterContentChecked{
    constructor(private elementRef:ElementRef){
        this.elementRef.nativeElement.style.backgroundColor = "blue";
    }

    ngAfterContentChecked() {
    }
}
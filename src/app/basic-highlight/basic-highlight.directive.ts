import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    // Note: The [] enclosing the selector defines it as an attribute directive
    // Subsequent it will be identified and applied as such
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
    constructor(private elementRef: ElementRef) {
        elementRef.nativeElement
    }

    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }

}
import { Directive, Renderer2, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue'); 
  }


  // This event response applies to all elements attached with directive
  // Listens to a particular event type encapsulated within '' 
  // The event is mouseover which takes in the Event 
  @HostListener('mouseenter') mouseover(eventData: Event){
    // This is the executed when the event occurs
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue'); 
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent'); 
  }


}

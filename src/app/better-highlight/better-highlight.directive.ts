import { 
  Directive, 
  Renderer2, 
  OnInit, 
  ElementRef, 
  HostListener, 
  HostBinding, 
  Input } 
  from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  // Custom property binding
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  
  // Accessing the DOM properties 
  // Access Style Property, and Sub Property Background Color  
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit(){
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue'); 
  }

  // This event response applies to all elements attached with directive
  // Listens to a particular event type encapsulated within '' 
  // The event is mouseover which takes in the Event 
  @HostListener('mouseenter') mouseover(eventData: Event){
    // This is the executed when the event occurs
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue'); 
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.highlightColor; 
  }


}

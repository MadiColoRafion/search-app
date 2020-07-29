import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';


@Directive({

  selector: '[appSurligner]'
})


export class SurlignerDirective {

  private elementRef: ElementRef;
  private render: Renderer2;

  @HostListener('click', ['$event'] )

  onClick(event: MouseEvent): void {
    if (this.elementRef)
    {
      this.render.setStyle(event.target, 'backgroundColor', 'green');
    }
  }

  constructor( elementRef: ElementRef, render: Renderer2){
    this.elementRef = elementRef;
    this.render = render;
    elementRef.nativeElement.style.textDecoration = 'underline';

   }
}

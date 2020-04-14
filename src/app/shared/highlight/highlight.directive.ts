import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
@Input('appHighlight') highlightColor : string;
  constructor(private el: ElementRef) {
    console.log(el);
   
  }
@HostListener('mouseenter') onMuseEnter(){
this.el.nativeElement.style.backgroundColor = 'yellow';
}
@HostListener('mouseleave') onMouseLeave(){
  this.el.nativeElement.style.backgroundColor = null;

  }

}

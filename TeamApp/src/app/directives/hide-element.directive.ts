import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHideElement]'
})
export class HideElementDirective {

  constructor(private elementRef: ElementRef) { }
  @HostListener('mouseenter') onItemMouseenter() {
    this.elementRef.nativeElement.style.background = 'red';
  }
  @HostListener('mouseleave') onItemMouseleave() {
    this.elementRef.nativeElement.style.background = null;
  }
}

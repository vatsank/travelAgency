import { Directive, Renderer2, HostListener, ElementRef, HostBinding } from '@angular/core';


@Directive({
  selector: '[appResize]'
})
export class ResizeDirective {

  @HostBinding('class.img-thumbnail') showBorder = true;
  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseover') over(){

      this.renderer.setStyle(this.element.nativeElement, 'width','230px');
      this.renderer.setStyle(this.element.nativeElement,'transition','width 3s');

      this.showBorder = false;
  }

  @HostListener('mouseout') out(){

    this.renderer.setStyle(this.element.nativeElement, 'width','200px');

    this.showBorder = true;
  }


}

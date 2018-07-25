
import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appHightLight]'
})
export class HightLightDirective implements OnInit {
 
   @Input() color:string;
   @Input() fntSize:string;
  constructor(private element: ElementRef, private renderer : Renderer2) { }

  
  ngOnInit(): void {
 
     this.renderer.setStyle(this.element.nativeElement, 'color', this.color);
     this.renderer.setStyle(this.element.nativeElement, 'font-size', this.fntSize);

  }

}

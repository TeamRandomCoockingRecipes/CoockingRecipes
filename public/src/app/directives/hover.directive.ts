import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {
  private originalWidth: Number;
  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.originalWidth = this.el.nativeElement.style.width;
  }

  @Input('appHover') hoverWidth: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.zoom(this.hoverWidth || '250px');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.width = this.originalWidth;
  }

  private zoom(width: string) {
    this.el.nativeElement.style.width = width;
  }
}

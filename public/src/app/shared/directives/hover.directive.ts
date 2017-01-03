import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {
  private originalStyle: string;
  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.originalStyle = this.el.nativeElement.style.boxShadow;
  }

  @Input('appHover') hoverStyle: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.hover(this.hoverStyle || 'none');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.boxShadow = this.originalStyle;
  }

  private hover(style: string) {
    this.el.nativeElement.style.boxShadow = style;
  }
}

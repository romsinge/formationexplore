import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[exploreFocus]',
})
export class FocusDirective {
  @Input('exploreFocus') price?: number;
  @Input('exploreFocus.color') color = '';

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    if (this.price && this.price < 50) {
      this.element.nativeElement.style.border = 'solid 3px gold';
    }
  }

  @HostListener('mouseover')
  handleMouseover(): void {
    this.element.nativeElement.style.transform = 'scale(1.1)';
  }

  @HostListener('mouseleave')
  handleMouseleave(): void {
    this.element.nativeElement.style.transform = 'scale(1)';
  }
}

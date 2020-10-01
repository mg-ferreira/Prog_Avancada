import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: 'input'
})
export class EstiloInputFocoDirective {


  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('focusin') focoNoCampoInput() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color', '#FFFACD',
    );
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'font-style', 'italic'
    );
  }

  @HostListener('focusout') CampoInputSemFoco() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color', '#FFFFFF'
    );
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'font-style', ''
    );
  }

}

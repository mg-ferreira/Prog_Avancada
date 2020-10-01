import { style } from '@angular/animations';
import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCorDeFocoComponente]'
})
export class CorDeFocoComponenteDirective {

  @HostBinding('style.backgroundColor') corDeFundo: string
  @Input('appCorDeFocoComponente') corDeFundoEntrada: string


  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }


  @HostListener('mouseover') mouseSobreOComponente() {
    this.corDeFundo = this.corDeFundoEntrada;
  }

  @HostListener('mouseleave') mouseForaDoComponente() {
    this.corDeFundo = "";
  }
}

import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[focusInput]',
  standalone: false
})
export class FocusInputDirectiveTsDirective implements AfterViewInit {

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    this.el.nativeElement.focus();
  }

}

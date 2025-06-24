import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tab',
  standalone: false,
  template: `
    <button [ngClass]="isActive ? 'btn-active' : 'btn'" (click)='onClick.emit(title)' [disabled]="isActive">{{title}}</button>
    <div style="display: none;"><ng-content></ng-content></div>
  `,
})
export class TabComponent {
  @Input() title: string = '';
  @Output() onClick = new EventEmitter<string>();

  isActive = false;

  constructor(private elRef: ElementRef<HTMLElement>) {}

  get content(): string {
    return this.elRef.nativeElement.lastChild?.textContent?.trim()!;
  }
}

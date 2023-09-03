import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCustomColor]'
})
export class CustomColorDirective {
  @Input() appCustomColor!: string;

  @HostBinding('style.color') get textColor() {
    return this.appCustomColor;
  }
}
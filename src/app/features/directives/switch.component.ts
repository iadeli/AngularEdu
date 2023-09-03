import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  template: `
    <div [ngSwitch]="color">
      <p *ngSwitchCase="'red'" style="color: red;">Red color is selected</p>
      <p *ngSwitchCase="'blue'" style="color: blue;">Blue color is selected</p>
      <p *ngSwitchCase="'green'" style="color: green;">Green color is selected</p>
      <p *ngSwitchDefault>No color is selected</p>
    </div>
  `
})
export class SwitchComponent {
  color: string = 'red';
}
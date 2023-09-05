import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  template: `
    <h1>Welcome to the Home Page</h1>
    <nav>
      <a [routerLink]="['/about']" [queryParams]="{ id: 1 }" fragment="section1">go to About</a><br />
      <button (click)="goToAbout()">go to about programmatically</button>
    </nav>
    `
})
export class HomeComponent {
  constructor(private router: Router) { }

  goToAbout() {
    const _id = 1;
    this.router.navigate(['/about'], { queryParams: { id: _id }, fragment: 'section1' })
  }
}
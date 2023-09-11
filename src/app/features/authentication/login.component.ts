import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
    selector: 'app-login',
    template: `
    <h1>Login</h1>
    <form (ngSubmit)="onSubmit()">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" [(ngModel)]="username" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" [(ngModel)]="password" required>
      </div>
      <button type="submit">Login</button>
    </form>
  `,
    styles: [`
    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      max-width: 300px;
      margin: 0 auto;
    }
  `]
})
export class LoginComponent {
    username!: string;
    password!: string;

    constructor(private authService: AuthService) { }

    onSubmit(): void {
        this.authService.login(this.username, this.password);
    }
}
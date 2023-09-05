import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn = false;

  login(username: string, password: string): boolean {
    // Simulate login logic
    if (username === 'admin' && password === 'password') {
      this._isLoggedIn = true;
      return true;
    }
    return false;
  }

  logout(): void {
    // Simulate logout logic
    this._isLoggedIn = false;
  }

  isLoggedIn(): boolean {
    return this._isLoggedIn;
  }
}
import { Component, OnInit } from '@angular/core';
import { AuthService } from './features/authentication/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-app';
  isAuthenticated = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.autoLogin();
    this.isAuthenticated = this.authService.getIsAuthenticated();
  }

  logout(): void {
    this.authService.logout();
    this.isAuthenticated = false;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private isAuthenticated = false;
    private token: string | null = null;

    login(username: string, password: string): void {
        // Perform authentication logic, e.g., send request to backend
        // If authentication is successful, set isAuthenticated to true and store the token
        this.isAuthenticated = true;
        this.token = 'your_auth_token';
        localStorage.setItem('token', this.token);
    }

    logout(): void {
        // Clear authentication data and redirect to login page
        this.isAuthenticated = false;
        this.token = null;
        localStorage.removeItem('token');
        // Add any additional logout logic, e.g., redirecting to a specific page
    }

    autoLogin(): void {
        // Check if token exists in local storage
        const token = localStorage.getItem('token');
        if (token) {
            this.isAuthenticated = true;
            this.token = token;
        }
    }

    autoLogout(): void {
        // Add logic to automatically logout the user after a certain period of inactivity
    }

    getToken(): string | null {
        return this.token;
    }

    getIsAuthenticated(): boolean {
        return this.isAuthenticated;
    }
}
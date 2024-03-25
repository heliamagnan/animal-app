import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;

  constructor() {}

  login(username: string, password: string): void {
    // Logique d'authentification
    // Exemple simplifié : vérification des identifiants
    if (username === 'admin' && password === 'password') {
      this.isLoggedIn = true;
    }
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}

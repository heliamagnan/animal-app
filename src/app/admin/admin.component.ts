import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  isLoggedIn: boolean;

  constructor(private authService: AuthService, private router: Router) {
    // Vérifier l'état de connexion en utilisant le service d'authentification
    this.isLoggedIn = this.authService.isAuthenticated();
  }

  logout(): void {
    // Déconnexion en utilisant le service d'authentification
    this.authService.logout();
    // Redirection vers la page de connexion
    this.router.navigate(['/login']);
  }
}

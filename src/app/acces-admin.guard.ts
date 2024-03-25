import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  //ne pas oublier d'ajouter le service et le routeur à notre constructeur pour le guard
  constructor(private authService: AuthService, private router: Router) {}

  //implémentation obligatoire de la méthode canActivate de notre interface CanActivate
  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}

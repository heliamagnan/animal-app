import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.scss'
})
export class AdminLoginComponent {
  //ne pas oublier le viewchild pour se servir du type d'objet NgForm et récupérer les données issues du forumaire
  @ViewChild('loginForm') loginForm!: NgForm;

  constructor(private authService: AuthService, private router: Router) {}

  login(loginForm: NgForm): void {
    // Logique de connexion en utilisant le service d'authentification
    this.authService.login(loginForm.value.username, loginForm.value.password);
    // Redirection vers l'espace d'administration si l'authentification est réussie
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/admin']);
    }

    //accès aux données du formulaire via nomDuFormulaire.value.variable
    console.log(loginForm.value.username);
  }
}

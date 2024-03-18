import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  isLoggedIn: boolean = false;

  constructor(private userService: UserService) {}

  login() {
    // Supposons que la connexion réussisse toujours pour l'exemple
    this.isLoggedIn = true;

    // Enregistrez l'état de connexion et le nom d'utilisateur
    this.userService.setLoggedIn(this.isLoggedIn);
    this.userService.setUsername(this.username);
  }
}

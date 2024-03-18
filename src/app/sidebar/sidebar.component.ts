import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  username$!: Observable<string>; // Indication à TypeScript que la propriété sera initialisée dans ngOnInit
  isLoggedIn$!: Observable<boolean>; // Indication à TypeScript que la propriété sera initialisée dans ngOnInit
  auteur!: string;
  biographie!: string;
  photo!: string;
  favAnimal!: string;

  constructor(private userService: UserService) {}

  ngOnInit() {
    // Initialisation des observables username$ et isLoggedIn$ en récupérant les valeurs du service UserService
    this.username$ = this.userService.username$;
    this.isLoggedIn$ = this.userService.isLoggedIn$;
    this.auteur = "Hélia";
    this.biographie = "Amie des animaux";
    this.photo = "maPhoto.jpeg";
    this.favAnimal = "Tous les animaux (surtout les chats)."
  }
}


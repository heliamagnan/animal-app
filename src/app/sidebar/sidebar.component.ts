import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  //attribut
  auteur!: string;
  biographie!: string;
  photo!: string;
  favAnimal!: string;

  //méthodes
  ngOnInit() {
    this.auteur = "Hélia";
    this.biographie = "Amie des animaux";
    this.photo = "maPhoto.jpeg";
    this.favAnimal = "Tous les animaux (surtout les chats)."
  }
}

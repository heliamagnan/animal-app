import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  sections = [
    { title: 'Chien', description: 'Image de chien', image: 'image1.jpg', likes:0 },
    { title: 'Chat', description: 'Image de chat', image: 'image2.jpg', likes:0 },
    { title: 'Oiseau', description: 'Image d\'oiseau', image: 'image3.jpg', likes:0 },
    { title: 'Panda', description: 'Image de panda', image: 'panda.jpg', likes: 0 },
    { title: 'Koala', description: 'Image de koala', image: 'koala.jpg', likes: 0 },
    { title: 'Lion', description: 'Image de lion', image: 'lion.jpg', likes: 0 },
  ];
}
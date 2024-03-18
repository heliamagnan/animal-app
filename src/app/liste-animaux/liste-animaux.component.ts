import { Component, Input} from '@angular/core';
import { AnimalService } from '../animal-service.service';

@Component({
  selector: 'app-liste-animaux',
  templateUrl: './liste-animaux.component.html',
  styleUrl: './liste-animaux.component.scss'
})
export class ListeAnimauxComponent {
  //le tableau qui va récupérer la liste d'animaux de notre service
  animaux: string[] = [];

  constructor(private animalService: AnimalService) {
    this.animaux = this.animalService.getTitresAnimaux();
  }
}

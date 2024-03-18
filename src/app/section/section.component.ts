import { Component, Input, HostListener, OnInit } from '@angular/core';
import { AnimalService } from '../animal-service.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() image: string = '';
  @Input() likes: number = 0;
  @Input() button: string = 'Like';


  //génération du service qui liste les animaux
  constructor(private animalService: AnimalService) {}

  ngOnInit() {
    //à l'initialisation de nos 6 cartes d'animaux, on ajoute le titre des animaux dans le tableau de notre service
    this.animalService.ajouterTitre(this.title);
  }

  // Propriété pour contrôler l'affichage de l'infobulle
  showTooltip: boolean = false;

  onClickLikesButton(){
    if (this.likes === 0) {
      this.likes = 1;
      this.button = 'Dislike';
    } else {
      this.likes = 0;
      this.button = 'Like';
    }
  }

  // Détection du survol de la souris pour afficher l'infobulle
  @HostListener('mouseenter') onMouseEnter() {
    this.showTooltip = true;
  }

  // Détection du départ du survol de la souris pour masquer l'infobulle
  @HostListener('mouseleave') onMouseLeave() {
    this.showTooltip = false;
  }
}

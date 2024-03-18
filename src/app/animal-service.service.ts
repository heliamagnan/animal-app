import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  //création du tableau qui stock la liste des animaux du site
  private titresAnimaux: string[] = [];

  //fonction de remplissage du tableau
  ajouterTitre(titre: string): void {
    this.titresAnimaux.push(titre);
  }

  //getter pour pouvoir afficher le contenu de notre tableau
  getTitresAnimaux(): string[] {
    return this.titresAnimaux;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitreDuSiteService {
  private titre: string = '';

  //retourne le titre du site stocké dans le service
  getTitre(): string {
    return this.titre;
  }

  //permet de peupler le titre de notre service
  setTitre(value: string): void {
    this.titre = value;
  }

}

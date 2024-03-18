import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // Déclaration de deux sujets (BehaviorSubject) pour stocker le nom d'utilisateur et l'état de connexion
  private usernameSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  // Observable pour le nom d'utilisateur, permet aux composants de s'abonner pour recevoir les mises à jour du nom d'utilisateur
  username$: Observable<string> = this.usernameSubject.asObservable();

  // Observable pour l'état de connexion, permet aux composants de s'abonner pour recevoir les mises à jour de l'état de connexion
  isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();

  constructor() {}

  // Méthode pour mettre à jour le nom d'utilisateur
  setUsername(username: string) {
    this.usernameSubject.next(username); // Émet la nouvelle valeur du nom d'utilisateur à tous les observateurs
  }

  // Méthode pour mettre à jour l'état de connexion
  setLoggedIn(isLoggedIn: boolean) {
    this.isLoggedInSubject.next(isLoggedIn); // Émet la nouvelle valeur de l'état de connexion à tous les observateurs
  }
}


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  private apiUrl = 'http://api.weatherapi.com/v1/current.json';
  private apiKey = 'api_key'; // Remplacez par votre clé API réelle

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer les données météorologiques pour une ville donnée
  getWeatherData(city: string): Promise<any> {
    // Construction de l'URL avec la ville et la clé API
    const url = `${this.apiUrl}?q=${city}&key=${this.apiKey}`;
    // Utilisation de HttpClient pour effectuer une requête GET et renvoyer une promesse
    return this.http.get(url).toPromise();
  }
}

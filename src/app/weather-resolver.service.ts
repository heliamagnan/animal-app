import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { WeatherApiService } from './weather-api.service';

@Injectable()
export class WeatherResolver implements Resolve<any> {
  constructor(private weatherApi: WeatherApiService) {}

  // Méthode pour résoudre les données météorologiques avant d'afficher le composant
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
    const cityName = 'Paris'; // Vous pouvez récupérer le nom de la ville à partir de la route si nécessaire
    // Appel à la méthode getWeatherData() du service pour obtenir les données météorologiques
    return this.weatherApi.getWeatherData(cityName);
  }
}

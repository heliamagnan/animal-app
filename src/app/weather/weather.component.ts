import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})

export class WeatherComponent implements OnInit {
  weatherData: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Souscription aux données résolues par le résolveur
    this.route.data.subscribe(data => {
      // Assignation des données à la propriété weatherData
      this.weatherData = data['weatherData'];
    });
  }
}

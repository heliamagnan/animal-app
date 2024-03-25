import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component'
import { HomeComponent } from './home/home.component';
import { BilleterieComponent } from "./billeterie/billeterie.component";

//on importe le component qui a l'accès protégé
import { AdminComponent } from "./admin/admin.component";

//on importe le guard
import { AuthGuard } from "./acces-admin.guard";
import { AdminLoginComponent } from "./admin-login/admin-login.component";
//import { SingleAnimalComponent } from "./single-animal/single-animal.component";

//weather api
import { WeatherComponent } from './weather/weather.component';
import { WeatherResolver } from './weather-resolver.service';

const routes: Routes = [
  //on ajoute les routes ici
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'billeterie', component: BilleterieComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'login', component: AdminLoginComponent },
  // { path: 'animal/:id', component: SingleAnimalComponent },
  { path: 'weather', component: WeatherComponent, resolve: { weatherData: WeatherResolver } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

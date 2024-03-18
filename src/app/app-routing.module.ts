import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component'
import { HomeComponent } from './home/home.component';
import { BilleterieComponent } from "./billeterie/billeterie.component";

const routes: Routes = [
  //on ajoute les routes ici
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'billeterie', component: BilleterieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

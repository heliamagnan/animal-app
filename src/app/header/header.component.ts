import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  //attributs
  title!: string;
  logo!: string;

  //méthodes
  ngOnInit(){
    this.title = "Les animaux du monde";
    this.logo = "logo.jpg";
  }

}

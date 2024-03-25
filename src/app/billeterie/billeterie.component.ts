import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-billeterie',
  templateUrl: './billeterie.component.html',
  styleUrl: './billeterie.component.scss'
})
export class BilleterieComponent {

  categories = [
    { title: 'Adulte', price: 20 },
    { title: 'Enfant', price: 10 }
  ];

}

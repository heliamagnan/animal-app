import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-billet',
  templateUrl: './billet.component.html',
  styleUrl: './billet.component.scss'
})
export class BilletComponent implements OnInit {

  @Input() title: string = '';
  @Input() price: number = 0;

  ngOnInit(): void {

  }

}

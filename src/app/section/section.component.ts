import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {
  //attributs
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() image: string = '';
  @Input() likes: number = 0;

  //méthodes
  onClickLikesButton(){
    this.likes++;
  }
}

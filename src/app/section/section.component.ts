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
  @Input() button: string = 'Like';

  //méthodes
  onClickLikesButton(){
    if (this.likes === 0) {
      this.likes = 1;
      this.button = 'Dislike';
    } else {
      this.likes = 0;
      this.button = 'Like';
    }
  }
}

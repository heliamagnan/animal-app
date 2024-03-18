// color-selector.component.ts
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-color-selector',
  templateUrl: './color-selector.component.html',
  styleUrls: ['./color-selector.component.scss']
})
export class ColorSelectorComponent {
  @Output() colorChanged = new EventEmitter<string>();

  selectedColor: string = 'white'; // Couleur par défaut
  txtColor: string = '#252525';

  changeColor(color: string) {
    this.selectedColor = color;
    this.colorChanged.emit(this.selectedColor);
    if (color == 'white'){
      this.txtColor = '#252525';
      console.log(this.txtColor);
    } else {
      this.txtColor = 'white';
      console.log(this.txtColor);
    }
  }

  isBordered: boolean = true;

  toggleBorder() {
    this.isBordered = !this.isBordered;
  }
}

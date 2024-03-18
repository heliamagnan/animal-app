import { Component, ViewChild } from '@angular/core';

//import du component parent pour utiliser le décorateur @ViewChild
import { ColorSelectorComponent } from './color-selector/color-selector.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //decorateur viewchild
  @ViewChild(ColorSelectorComponent) colorSelector!: ColorSelectorComponent;
  modeDeCouleur: string = '';
  modeDeCouleurTxt: string = '';

  ngAfterViewInit() {
    //récupère la couleur à l'initialisation
    if (this.colorSelector) {
      //affiche la couleur de l'élement parent
      this.modeDeCouleur = this.colorSelector.selectedColor;
      this.modeDeCouleurTxt = this.colorSelector.txtColor;
    }
  }

  //est appellé à chaque changement de couleur dans le component enfant
  onColorChanged(color: string) {
    this.modeDeCouleur = color;
    if (color == 'white'){
      this.modeDeCouleurTxt = '#252525';
      console.log(this.modeDeCouleurTxt);
    } else {
      this.modeDeCouleurTxt = 'white';
      console.log(this.modeDeCouleurTxt);
    }
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Spaiderman', 'Iroman', 'Holk', 'Goku', 'Capitan America'];

  heroeBor: string = '';

  borrarHeroe(){
    this.heroeBor = this.heroes.shift() || '';
  }

}

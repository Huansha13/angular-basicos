import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponet } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
  declarations:[
    HeroeComponet,
    ListadoComponent
  ],
  exports:[
    //lo que se va ver fuera de este modulo
    ListadoComponent
  ],
  imports:[
    //aqui van solo modulos
    CommonModule
  ]
})

export class HeroesModule {}

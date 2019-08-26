import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team/team.component';
import { IonicModule } from '@ionic/angular';
import { StadiumComponent } from './stadium/stadium.component';
import { PlayerComponent } from './player/player.component';



@NgModule({
  declarations: [
    TeamComponent,
    StadiumComponent,
    PlayerComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    TeamComponent,
    StadiumComponent,
    PlayerComponent
  ]
})
export class ComponentsModule { }

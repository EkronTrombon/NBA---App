import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team/team.component';
import { IonicModule } from '@ionic/angular';
import { StadiumComponent } from './stadium/stadium.component';



@NgModule({
  declarations: [
    TeamComponent,
    StadiumComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    TeamComponent,
    StadiumComponent
  ]
})
export class ComponentsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team/team.component';
import { IonicModule } from '@ionic/angular';
import { StadiumComponent } from './stadium/stadium.component';
import { PlayerComponent } from './player/player.component';
import { NewsComponent } from '../components/news/news.component';
import { TeamStatsComponent } from './team-stats/team-stats.component';



@NgModule({
  declarations: [
    TeamComponent,
    StadiumComponent,
    PlayerComponent,
    NewsComponent,
    TeamStatsComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    TeamComponent,
    StadiumComponent,
    PlayerComponent,
    NewsComponent,
    TeamStatsComponent
  ]
})
export class ComponentsModule { }

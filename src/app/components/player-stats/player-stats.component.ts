import { Component, OnInit, Input } from '@angular/core';
import { PlayerStats } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.scss'],
})
export class PlayerStatsComponent implements OnInit {
  
  @Input() playerStats: PlayerStats;

  constructor() { }

  ngOnInit() {
    console.log(this.playerStats);
  }

}

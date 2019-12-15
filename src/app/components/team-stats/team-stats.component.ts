import { Component, OnInit, Input } from '@angular/core';
import { TeamStats } from '../../interfaces/interfaces';

@Component({
  selector: 'app-team-stats',
  templateUrl: './team-stats.component.html',
  styleUrls: ['./team-stats.component.scss'],
})
export class TeamStatsComponent implements OnInit {

  @Input() stats: TeamStats;

  constructor() { }

  ngOnInit() {}

}

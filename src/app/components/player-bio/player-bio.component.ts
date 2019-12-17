import { Component, OnInit, Input } from '@angular/core';
import { PlayerInfo } from '../../interfaces/interfaces';

@Component({
  selector: 'app-player-bio',
  templateUrl: './player-bio.component.html',
  styleUrls: ['./player-bio.component.scss'],
})
export class PlayerBioComponent implements OnInit {

  @Input() playerBio: PlayerInfo;

  constructor() { }

  ngOnInit() {
    console.log(this.playerBio);
  }

}

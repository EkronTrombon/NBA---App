import { Component, OnInit, Input } from '@angular/core';
import { PlayerInfo, PlayerStats } from '../../interfaces/interfaces';
import { PlayerService } from '../../services/player.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {

  @Input() playerId: number;
  @Input() teamLogo: string;
  playerInfo: PlayerInfo = {};
  playerStats: PlayerStats = {};

  constructor(private playerService: PlayerService,
              private modalCtrl: ModalController) { }

  ngOnInit() {
    this.loadPlayerInfo(this.playerId);
    this.loadPlayerStats(this.playerId);
  }

  async loadPlayerInfo(playerId: number) {
    this.playerInfo = await this.playerService.getPlayerInfo(playerId);
  }

  async loadPlayerStats(playerId: number) {
    this.playerStats = await this.playerService.getPlayerStats(playerId);
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

}

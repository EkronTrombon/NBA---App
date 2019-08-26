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

  async ngOnInit() {
    await this.loadPlayerInfo(this.playerId);
    await this.loadPlayerStats(this.playerId);
    // console.log(this.playerInfo);
    console.log(this.playerStats);
  }

  loadPlayerInfo(playerId: number) {
    return new Promise(resolve => {
      this.playerService.getPlayerInfo(playerId).subscribe((res: PlayerInfo) => {
        if (res) {
          this.playerInfo = res;
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  }

  loadPlayerStats(playerId: number) {
    return new Promise(resolve => {
      this.playerService.getPlayerStats(playerId).subscribe((res: PlayerStats) => {
        if (res) {
          this.playerStats = res;
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

}

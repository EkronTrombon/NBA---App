import { Component, OnInit } from '@angular/core';
import { Team, Player } from '../../interfaces/interfaces';
import { TeamService } from '../../services/team.service';
import { PlayerService } from '../../services/player.service';
import { ModalController } from '@ionic/angular';
import { PlayerComponent } from '../../components/player/player.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page  implements OnInit {

  teams: Team[] = [];
  players: Player[] = [];
  selectedTeam: Team = {};

  constructor(private teamService: TeamService,
              private playerService: PlayerService,
              private modalCtrl: ModalController) {}

  async ngOnInit() {
    await this.loadTeams();
  }

  loadTeams() {
    return new Promise(resolve => {
      this.teamService.getTeams().subscribe((res: Team[]) => {
        for (const team of res) {
          if (team.TeamID !== 31 && team.TeamID !== 32) {
            this.teams.push(team);
          }
        }
        if (this.teams.length > 0) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  }

  async segmentChanged(event) {
    this.selectedTeam = event.detail.value;
    await this.selTeamPlayers(this.selectedTeam.Key);
  }

  selTeamPlayers(key: string) {
    return new Promise(resolve => {
      this.playerService.getPlayerByTeam(key).subscribe((res: Player[]) => {
        if (res.length > 0) {
          this.players = res;
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  }

  async openPlayerModal(playerId: number) {
    const modal = await this.modalCtrl.create({
      component: PlayerComponent,
      componentProps: { 'playerId': playerId, 'teamLogo': this.selectedTeam.WikipediaLogoUrl }
    });
    return await modal.present();
  }

}

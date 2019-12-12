import { Component, OnInit } from '@angular/core';
import { Team, Player } from '../../interfaces/interfaces';
import { TeamService } from '../../services/team.service';
import { PlayerService } from '../../services/player.service';
import { ModalController } from '@ionic/angular';
import { PlayerComponent } from '../../components/player/player.component';
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

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

  ngOnInit() {
    this.loadTeams();
  }

  async loadTeams() {
    const allTeams = await this.teamService.getTeams();
    from(allTeams).pipe(
      filter(team => team.TeamID <= 30)
    ).subscribe(resp => {
      this.teams.push(resp);
    });
  }

  async segmentChanged(event) {
    this.selectedTeam = event.detail.value;
    await this.selTeamPlayers(this.selectedTeam.Key);
  }

  async selTeamPlayers(key: string) {
    this.players = await this.playerService.getPlayerByTeam(key);
  }

  async openPlayerModal(playerId: number) {
    const modal = await this.modalCtrl.create({
      component: PlayerComponent,
      componentProps: { 'playerId': playerId, 'teamLogo': this.selectedTeam.WikipediaLogoUrl }
    });
    return await modal.present();
  }

}

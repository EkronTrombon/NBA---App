import { Component, OnInit, Input } from '@angular/core';
import { Team, TeamStats, Stadium } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { TeamService } from '../../services/team.service';
import { resolve } from 'q';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {

  @Input() team: Team;
  teamStats: TeamStats = {};
  teamStadium: Stadium = {};

  constructor(private modalCtrl: ModalController,
              private teamService: TeamService) {}

  async ngOnInit() {
    await this.getTeamStats(this.team.TeamID);
    await this.getTeamStadium(this.team.StadiumID);
  }

  getTeamStats(idTeam: number) {
    return new Promise(resolve => {
      this.teamService.getTeamStats().subscribe((res: TeamStats[]) => {
        for (const stat of res) {
          if (stat.TeamID === idTeam) {
            this.teamStats = stat;
            resolve(true);
          }
        }
      });
    });
  }

  getTeamStadium(idStadium: number) {
    return new Promise(resolve => {
      this.teamService.getStadiums().subscribe((res: Stadium[]) => {
        for (const stadium of res) {
          if (stadium.StadiumID === idStadium) {
            this.teamStadium = stadium;
            resolve(true);
          }
        }
      });
    });
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Team, TeamStats, Stadium } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { TeamService } from '../../services/team.service';
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

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

  ngOnInit() {
    this.getTeamStats(this.team.TeamID);
    this.getTeamStadium(this.team.StadiumID);
  }

  async getTeamStats(idTeam: number) {
    const teamsStats = await this.teamService.getTeamStats();
    from(teamsStats).pipe(
      filter(team => team.TeamID === idTeam)
    ).subscribe(resp => this.teamStats = resp);
  }

  async getTeamStadium(idStadium: number) {
    const allStadiums = await this.teamService.getStadiums();
    from(allStadiums).pipe(
      filter(stadium => stadium.StadiumID === idStadium)
    ).subscribe(resp => this.teamStadium = resp);
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

}

import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { Team } from 'src/app/interfaces/interfaces';
import { TeamComponent } from '../../components/team/team.component';
import { ModalController } from '@ionic/angular';
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  teams: Team[] = [];

  constructor(private teamService: TeamService, private modalCtrl: ModalController) {}

  ngOnInit() {}

  async segmentChanged(event) {
    const conf = event.detail.value;
    this.teams = [];
    await this.loadTeams(conf);
  }

  async loadTeams(conf: string) {
    const allTeams = await this.teamService.getTeams();
    from(allTeams).pipe(
      filter(team => (team.TeamID <= 30 && team.Conference === conf))
    ).subscribe(resp => {
      this.teams.push(resp);
    });
  }

  async openTeamModal(team) {
    const modal = await this.modalCtrl.create({
      component: TeamComponent,
      componentProps: { 'team': team }
    });
    return await modal.present();
  }
}
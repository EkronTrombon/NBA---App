import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { Team } from 'src/app/interfaces/interfaces';
import { TeamComponent } from '../../components/team/team.component';
import { ModalController } from '@ionic/angular';

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

  loadTeams(conf: string) {
    return new Promise(resolve => {
      this.teamService.getTeams().subscribe((res: Team[]) => {
        for (const team of res) {
          if (team.Conference === conf) {
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

  async openTeamModal(team) {
    const modal = await this.modalCtrl.create({
      component: TeamComponent,
      componentProps: { 'team': team }
    });
    return await modal.present();
  }
}
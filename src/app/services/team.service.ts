import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SeasonService } from './season.service';
import { Team, TeamStats, Stadium } from '../interfaces/interfaces';

const URL_SCORES = environment.URL_SCORES;
const API_KEY = environment.API_KEY;

const headers = new HttpHeaders({
  'Ocp-Apim-Subscription-Key': API_KEY
});

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  currentSeason: string;

  constructor(private http: HttpClient,
              private seasonService: SeasonService) {
    this.currentSeason = this.seasonService.calculateSeason();
  }

  getTeams() {
    return new Promise<Team[]>((resolve, reject) => {
      this.http.get(`${URL_SCORES}/AllTeams`, { headers }).subscribe((resp: Team[]) => {
        if (resp) {
          resolve(resp);
        } else {
          reject(true);
        }
      });
    });
  }

  getTeamStats() {
    return new Promise<TeamStats[]>((resolve, reject) => {
      this.http.get(`${URL_SCORES}/TeamSeasonStats/${this.currentSeason}`, { headers }).subscribe((resp: TeamStats[]) => {
        if (resp) {
          resolve(resp);
        } else {
          reject(true);
        }
      });
    });
  }

  getStadiums() {
    return new Promise<Stadium[]>((resolve, reject) => {
      this.http.get(`${URL_SCORES}/Stadiums`, { headers }).subscribe((resp: Stadium[]) => {
        if (resp) {
          resolve(resp);
        } else {
          reject(true);
        }
      });
    });
  }
}

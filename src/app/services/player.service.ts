import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { SeasonService } from './season.service';
import { Player, PlayerInfo, PlayerStats } from '../interfaces/interfaces';

const URL_SCORES = environment.URL_SCORES;
const URL_STATS = environment.URL_STATS;
const API_KEY = environment.API_KEY;

const headers = new HttpHeaders({
  'Ocp-Apim-Subscription-Key': API_KEY
});

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  currentSeason: string;

  constructor(private http: HttpClient,
              private seasonService: SeasonService) {
    this.currentSeason = this.seasonService.calculateSeason();
  }

  getPlayerByTeam(teamKey: string) {
    return new Promise<Player[]>((resolve, reject) => {
      this.http.get(`${URL_STATS}/Players/${teamKey}`, { headers }).subscribe((resp: Player[]) => {
        if (resp) {
          resolve(resp);
        } else {
          reject(true);
        }
      });
    });
  }

  getPlayerInfo(playerId: number) {
    return new Promise<PlayerInfo>((resolve, reject) => {
      this.http.get(`${URL_SCORES}/Player/${playerId}`, { headers }).subscribe((resp: PlayerInfo) => {
        if (resp) {
          resolve(resp);
        } else {
          reject(true);
        }
      });
    });
  }

  getPlayerStats(playerId: number) {
    return new Promise<PlayerStats>((resolve, reject) => {
      this.http.get(`${URL_STATS}/PlayerSeasonStatsByPlayer/${this.currentSeason}/${playerId}`, { headers }).subscribe((resp: PlayerStats) => {
        if (resp) {
          resolve(resp);
        } else {
          reject(true);
        }
      });
    });
  }
}

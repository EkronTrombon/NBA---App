import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const URL_SCORES = environment.URL_SCORES;
const URL_STATS = environment.URL_STATS;
const API_KEY = environment.API_KEY;
const SEASON = new Date().getFullYear();

const headers = new HttpHeaders({
  'Ocp-Apim-Subscription-Key': API_KEY
});

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  getPlayerByTeam(teamKey: string) {
    return this.http.get(`${URL_STATS}/Players/${teamKey}`, { headers });
  }

  getPlayerInfo(playerId: number) {
    return this.http.get(`${URL_SCORES}/Player/${playerId}`, { headers });
  }

  getPlayerStats(playerId: number) {
    return this.http.get(`${URL_STATS}/PlayerSeasonStatsByPlayer/${SEASON}/${playerId}`, { headers });
  }
}

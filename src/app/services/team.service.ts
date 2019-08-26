import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const URL_SCORES = environment.URL_SCORES;
const API_KEY = environment.API_KEY;
const SEASON = new Date().getFullYear();

const headers = new HttpHeaders({
  'Ocp-Apim-Subscription-Key': API_KEY
});

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) {}

  getTeams() {
    return this.http.get(`${URL_SCORES}/AllTeams`, { headers });
  }

  getTeamStats() {
    return this.http.get(`${URL_SCORES}/TeamSeasonStats/${SEASON}`, { headers });
  }

  getStadiums() {
    return this.http.get(`${URL_SCORES}/Stadiums`, { headers });
  }
}

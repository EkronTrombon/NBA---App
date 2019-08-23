import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TeamStats } from '../interfaces/interfaces';

const URL = environment.URL;
const API_KEY = environment.API_KEY;

const headers = new HttpHeaders({
  'Ocp-Apim-Subscription-Key': API_KEY
});

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) {}

  getTeams() {
    return this.http.get(`${URL}/AllTeams`, { headers });
  }

  getTeamStats() {
    return this.http.get(`${URL}/TeamSeasonStats/2019`, { headers });
  }

  getStadiums() {
    return this.http.get(`${URL}/Stadiums`, { headers });
  }
}

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { News } from '../interfaces/interfaces';

const URL_SCORES = environment.URL_SCORES;
const API_KEY = environment.API_KEY;

const headers = new HttpHeaders({
  'Ocp-Apim-Subscription-Key': API_KEY
});

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) {}

  getNews() {
    // return this.http.get(`${URL_SCORES}/News`, { headers });
    return new Promise<News[]>((resolve, reject) => {
      this.http.get(`${URL_SCORES}/News`, { headers }).subscribe((resp: News[]) => {
        if (resp) {
          resolve(resp);
        } else {
          reject(true);
        }
      });
    });
  }
}

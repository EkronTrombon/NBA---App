import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeasonService {

  constructor() { }

  calculateSeason() {
    let currentSeason = '';
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    if (currentMonth < 8) {
      currentSeason = currentDate.getFullYear().toString();
      return currentSeason;
    } else {
      currentSeason = (currentDate.getFullYear() + 1).toString();
      return currentSeason;
    }
  }
}

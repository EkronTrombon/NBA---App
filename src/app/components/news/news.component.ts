import { Component, Input } from '@angular/core';
import { News } from '../../interfaces/interfaces';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent {

  @Input() news: News;
  @Input() i: number;
  oculto = 100;

  constructor(private iab: InAppBrowser) {}

  openNews() {
    const browser = this.iab.create(this.news.Url, '_system');
  }

}

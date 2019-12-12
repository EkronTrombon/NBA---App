import { Component, OnInit } from '@angular/core';
import { News } from '../../interfaces/interfaces';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  news: News[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.loadNews();
  }

  async loadNews() {
    // return new Promise(resolve => {
    //   this.newsService.getNews().subscribe((res: News[]) => {
    //     if (res.length > 0) {
    //       this.news = res;
    //       resolve(true);
    //     } else {
    //       resolve(false);
    //     }
    //   });
    // });
    this.news = await this.newsService.getNews();
    console.log(this.news);
  }

}

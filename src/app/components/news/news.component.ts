import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import '../../../../node_modules/zone.js/dist/zone.js';

import { NewsItemComponent } from './news-item/news-item.component';
import { NewsService } from '../../services/news.service';
import { News, NewsResponse } from '../../model/news';
import { NewsActions } from '../../store/actions/news.actions';
import { getNews } from '../../store/reducers/selector';
import { news, NewsState } from '../../store/reducers/news.reducer';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: []
})
export class NewsComponent implements OnInit {
  sectionNewsList: News[];

  constructor(private route: ActivatedRoute, private newsService: NewsService, private store: Store<NewsState>, private newsAction: NewsActions
  ) { }

  ngOnInit() {
    let sectionName;
      // send this sectionName to newsService. Subscribe newsService and get the newsList
      // now, get news from store
      this.route.params.subscribe(params => {
        sectionName = params['id'];
        this.newsService.getSectionNews(sectionName).subscribe((res: NewsResponse) => {
          this.store.dispatch(this.newsAction.LoadSectionNews(res.results));
          this.store.select(getNews).subscribe(news => {
            console.log(news);
            this.sectionNewsList = news;
          });
        });
      });


  }
}

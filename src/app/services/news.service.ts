import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { News, NewsResponse } from '../model/news';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsService {
  apiUrl = 'https://api.nytimes.com/svc/topstories/v2/';
  apiKey = '315a5a51483b469a918246dc2753b339';

  constructor(private http: Http) { }

  getSectionNews(sectionName: string): Observable<NewsResponse> {
    // fetch news of that sectionName
    let url = this.generateUrl(this.apiUrl, this.apiKey, sectionName)
    return this.http.get(url).map(response => JSON.parse(response.text()));
  }

  private generateUrl(apiUrl: string, apiKey: string, section: string){
    return apiUrl + section + ".json?api-key=" + apiKey;
  }
}

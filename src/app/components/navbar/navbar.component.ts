import { News } from './../../model/news';
import { NewsState } from './../../store/reducers/news.reducer';
import { getSubSections } from '../../store/reducers/selector';
import { NewsActions } from '../../store/actions/news.actions';

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  subsections: any[];
  response: Object[];
  constructor(
    private store: Store<NewsState>,
    private newsActions: NewsActions
  ) {

  }

  ngOnInit() {
    this.getSubSections();
  }

  dispatchAction($event: string) {
    this.store.dispatch(this.newsActions.FilterSubsection($event));
    this.getSubSections();
  }

  private getSubSections(){
    this.store.select(getSubSections).subscribe(sections => {
      this.subsections = sections;
    });
  }

}

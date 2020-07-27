import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { initialState, LOAD_SECTIONS, sections } from '../../store/reducers/sections.reducer';
// import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  sectionList: any;

  constructor() {
    this.sectionList = sections(initialState, {type: LOAD_SECTIONS, payload: {}});
  }

  ngOnInit() {}

}

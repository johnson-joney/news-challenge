import { NewsActions } from './../actions/news.actions';
import { Action, Store } from '@ngrx/store';
import { News } from '../../model/news';

// define actions
export const LOAD_SECTION_NEWS = '[News] LOAD_SECTION_NEWS';
export const FILTER_SUBSECTION = '[News] FILTER_SUBSECTION';

// define state interface
export interface NewsState {
    allNews: News[],
    newsList: News[];
    subSections: string[],
    filter: string;
}

// initial state
export const initialState: NewsState = {
    allNews: [],
    newsList: [],
    subSections: [],
    filter: ''
};

// implement actions
export function news (state = initialState, action: Action) {
    switch (action.type) {
        case LOAD_SECTION_NEWS: {
            return {
                allNews: action.payload,
                newsList: action.payload,
                subSections: Array.from(new Set(action.payload.map(n => {return n.subsection}))).filter(n => {return n != ''}),
                filter: state.filter
            };
        }
        case FILTER_SUBSECTION: {
            return {
                allNews: state.allNews,
                newsList: state.allNews.filter(n => {return n.subsection == action.payload}),
                subSections: state.subSections,
                filter: action.payload
            };
        }
        default:
            return state;
    }
}

export const getNewsList = (state: any) => {
  return state.news.newsList;
};

export const getSubSectionsList = (state: any) => {
  return state.news.subSections;
}

export const getFilter = (state: any) => {
  return state.news.filter;
};

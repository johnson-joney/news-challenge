import {createSelector } from 'reselect';
import { getNewsList, getFilter, getSubSectionsList } from './news.reducer';

export const getNews = createSelector(getNewsList, news => { return news; });
export const getSubSections = createSelector(getSubSectionsList, sections => { return sections; });

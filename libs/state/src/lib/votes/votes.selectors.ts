import { createFeatureSelector, createSelector } from '@ngrx/store';
import { VoteItem } from '../models';
import * as fromVotes from './votes.reducer';

export const selectVotesState = createFeatureSelector<fromVotes.State>(
  fromVotes.votesFeatureKey
);

export const getVoteItems = createSelector(selectVotesState, (state) => {
  const voteItems: VoteItem[] = [];
  Object.keys(state.voteCountsMap).forEach((key) => {
    voteItems.push({ label: key, count: state.voteCountsMap[key] });
  });
  return voteItems;
});

export const getColor = (key: string) =>
  createSelector(selectVotesState, (state) => {
    const config = state.voteConfigsMap[key];
    return config?.color || '#000000';
  });

export const getLabel = (key: string) =>
  createSelector(selectVotesState, (state) => {
    const config = state.voteConfigsMap[key];
    return config?.label || 'unknown';
  });

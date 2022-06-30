import { Action, createReducer, on } from '@ngrx/store';
import { VoteConfig } from '../models';
import * as VotesActions from './votes.actions';

export const votesFeatureKey = 'votes';

export interface State {
  voteCountsMap: { [key: string]: number };
  voteConfigsMap: { [key: string]: VoteConfig };
}

export const initialState: State = {
  voteCountsMap: {
    red: 0,
    blue: 0,
    green: 0,
  },
  voteConfigsMap: {},
};

export const reducer = createReducer(
  initialState,

  on(VotesActions.addVote, (state, { key }) => {
    const vote = state.voteCountsMap[key] || 0;
    const updatedVoteItems = { ...state.voteCountsMap, [key]: vote + 1 };
    return { ...state, voteCountsMap: updatedVoteItems };
  }),
  on(VotesActions.registerCategory, (state, { key, config }) => {
    const updatedVoteConfig = { ...state.voteConfigsMap, [key]: config };
    return { ...state, voteConfigsMap: updatedVoteConfig };
  })
);

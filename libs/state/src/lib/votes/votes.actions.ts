import { createAction, props } from '@ngrx/store';
import { VoteConfig } from '../models';

export const loadVotess = createAction('[Votes] Load Votess');

export const addVote = createAction(
  '[Votes] Add vote',
  props<{ key: string }>()
);

export const registerCategory = createAction(
  '[Votes] Register category',
  props<{ key: string; config: VoteConfig }>()
);

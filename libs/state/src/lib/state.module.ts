import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromVotes from './votes/votes.reducer';
import { VotesFacade } from './votes.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromVotes.votesFeatureKey, fromVotes.reducer),
  ],
  providers: [VotesFacade],
})
export class StateModule {}

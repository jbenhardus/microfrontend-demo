import { Inject, Injectable, Optional } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as votesSeletors from './votes/votes.selectors';
import * as VotesActions from './votes/votes.actions';
import { VoteConfig } from './models';

@Injectable()
export class VotesFacade {
  voteItems$ = this.store.pipe(select(votesSeletors.getVoteItems));
  color$ = this.store.pipe(select(votesSeletors.getColor(this.voteKey)));
  label$ = this.store.pipe(select(votesSeletors.getLabel(this.voteKey)));

  constructor(
    private store: Store,
    @Optional() @Inject('VOTE_KEY') private voteKey: string
  ) {}

  vote() {
    this.store.dispatch(VotesActions.addVote({ key: this.voteKey }));
  }

  registerCategory(config: VoteConfig) {
    this.store.dispatch(
      VotesActions.registerCategory({ key: this.voteKey, config })
    );
  }
}

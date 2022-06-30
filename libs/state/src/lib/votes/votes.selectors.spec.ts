import * as fromVotes from './votes.reducer';
import { selectVotesState } from './votes.selectors';

describe('Votes Selectors', () => {
  it('should select the feature state', () => {
    const result = selectVotesState({
      [fromVotes.votesFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});

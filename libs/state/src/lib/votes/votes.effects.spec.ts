import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { VotesEffects } from './votes.effects';

describe('VotesEffects', () => {
  let actions$: Observable<any>;
  let effects: VotesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        VotesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(VotesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

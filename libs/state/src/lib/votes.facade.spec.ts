import { TestBed } from '@angular/core/testing';

import { VotesFacade } from './votes.facade';

describe('VotesFacade', () => {
  let service: VotesFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VotesFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

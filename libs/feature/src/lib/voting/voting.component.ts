import { Component, OnInit } from '@angular/core';
import { VoteItem, VotesFacade } from '@microfrontend-demo/state';
import { Observable } from 'rxjs';

@Component({
  selector: 'microfrontend-demo-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.less'],
})
export class VotingComponent {
  // voteItems$: Observable<VoteItem[]> = this.facade.voteItems$;
  // color$: Observable<string> = this.facade.color$;
  // label$: Observable<string> = this.facade.label$;
  // constructor(private facade: VotesFacade) {}
  // vote() {
  //   this.facade.vote();
  // }
}

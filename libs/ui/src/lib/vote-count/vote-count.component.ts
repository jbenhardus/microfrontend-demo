import { Component, Input } from '@angular/core';
import { VoteItem } from '@microfrontend-demo/state';

@Component({
  selector: 'microfrontend-demo-vote-count',
  templateUrl: './vote-count.component.html',
  styleUrls: ['./vote-count.component.less'],
})
export class VoteCountComponent {
  @Input() voteItems: VoteItem[] | null = [];
}

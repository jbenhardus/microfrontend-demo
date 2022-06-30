import { Component, OnInit } from '@angular/core';
import { VotesFacade } from '@microfrontend-demo/state';

@Component({
  selector: 'microfrontend-demo-red-entry',
  template: `<microfrontend-demo-voting></microfrontend-demo-voting>`,
})
export class RemoteEntryComponent implements OnInit {
  constructor(private votesFacade: VotesFacade) {}

  ngOnInit() {
    this.votesFacade.registerCategory({
      label: 'Team Red',
      color: '#ff0000',
    });
  }
}

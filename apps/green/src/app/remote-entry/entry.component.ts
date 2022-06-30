import { Component, OnInit } from '@angular/core';
import { VotesFacade } from '@microfrontend-demo/state';

@Component({
  selector: 'microfrontend-demo-green-entry',
  template: `<microfrontend-demo-voting></microfrontend-demo-voting>`,
})
export class RemoteEntryComponent implements OnInit {
  constructor(private facade: VotesFacade) {}

  ngOnInit() {
    this.facade.registerCategory({
      label: 'GREEN',
      color: '#00ff00',
    });
  }
}

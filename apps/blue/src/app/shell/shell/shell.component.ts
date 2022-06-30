import { Component, OnInit } from '@angular/core';
import { VotesFacade } from '@microfrontend-demo/state';

@Component({
  selector: 'microfrontend-demo-blue-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.less'],
})
export class ShellComponent {
  constructor(private facade: VotesFacade) {}
  ngOnInit(): void {
    this.facade.registerCategory({
      label: 'Blue',
      color: '#0000ff',
    });
  }
}

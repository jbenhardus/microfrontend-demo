import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'microfrontend-demo-vote-button',
  templateUrl: './vote-button.component.html',
  styleUrls: ['./vote-button.component.less'],
})
export class VoteButtonComponent {
  @Input() color: string | null = '#00000';
  @Input() label: string | null = '';
  @Output() voted = new EventEmitter();

  vote() {
    this.voted.emit();
  }
}

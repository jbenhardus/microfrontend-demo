import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoteButtonComponent } from './vote-button/vote-button.component';
import { VoteCountComponent } from './vote-count/vote-count.component';

@NgModule({
  imports: [CommonModule],
  declarations: [VoteButtonComponent, VoteCountComponent],
  exports: [VoteButtonComponent, VoteCountComponent],
})
export class UiModule {}

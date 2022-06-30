import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VotingComponent } from './voting/voting.component';
import { UiModule } from '@microfrontend-demo/ui';

@NgModule({
  imports: [CommonModule, UiModule],
  declarations: [VotingComponent],
  exports: [VotingComponent],
})
export class FeatureModule {}

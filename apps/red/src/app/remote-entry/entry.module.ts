import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { FeatureModule } from '@microfrontend-demo/feature';
import { StateModule } from '@microfrontend-demo/state';

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [
    CommonModule,
    FeatureModule,
    StateModule,
    RouterModule.forChild([
      {
        path: '',
        component: RemoteEntryComponent,
      },
    ]),
  ],
  providers: [{ provide: 'VOTE_KEY', useValue: 'red' }],
})
export class RemoteEntryModule {}

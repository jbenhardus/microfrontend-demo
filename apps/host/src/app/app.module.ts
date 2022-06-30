import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { loadRemoteModule } from '@nrwl/angular/mfe';
import { StoreModule } from '@ngrx/store';
import { StateModule } from '@microfrontend-demo/state';
import { FeatureModule } from '@microfrontend-demo/feature';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    StateModule,
    FeatureModule,
    StoreModule.forRoot({}),
    RouterModule.forRoot(
      [
        {
          path: '',
          component: NxWelcomeComponent,
        },
        {
          path: 'red',
          loadChildren: () =>
            loadRemoteModule('red', './Module').then(
              (m) => m.RemoteEntryModule
            ),
        },
        {
          path: 'blue',
          loadChildren: () =>
            loadRemoteModule('blue', './Module').then(
              (m) => m.RemoteEntryModule
            ),
        },
        {
          path: 'green',
          loadChildren: () =>
            loadRemoteModule('green', './Module').then(
              (m) => m.RemoteEntryModule
            ),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

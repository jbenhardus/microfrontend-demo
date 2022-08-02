import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { loadRemoteModule } from '@nrwl/angular/mfe';
import { StoreModule } from '@ngrx/store';
import { StateModule } from '@microfrontend-demo/state';
import { FeatureModule } from '@microfrontend-demo/feature';
import { RedLoaderModule } from './red-loader/red-loader.module';
import { GreenLoaderModule } from './green-loader/green-loader.module';
import { BlueLoaderModule } from './blue-loader/blue-loader.module';
import { ColorOutputModule } from './color-output/color-output.module';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    StateModule,
    FeatureModule,
    RedLoaderModule,
    GreenLoaderModule,
    BlueLoaderModule,
    ColorOutputModule,
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

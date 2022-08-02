import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlueShellComponent } from './blue-shell/blue-shell.component';
import { RouterModule } from '@angular/router';
import { loadRemoteModule } from '@nrwl/angular/mfe';

@NgModule({
  declarations: [BlueShellComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () =>
          loadRemoteModule('blue', './Module').then((m) => m.RemoteEntryModule),
        outlet: 'blue',
      },
    ]),
  ],
  exports: [BlueShellComponent],
})
export class BlueLoaderModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedShellComponent } from './red-shell/red-shell.component';
import { RouterModule } from '@angular/router';
import { loadRemoteModule } from '@nrwl/angular/mfe';

@NgModule({
  declarations: [RedShellComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () =>
          loadRemoteModule('red', './Module').then((m) => m.RemoteEntryModule),
        outlet: 'red',
      },
    ]),
  ],
  exports: [RedShellComponent],
})
export class RedLoaderModule {}

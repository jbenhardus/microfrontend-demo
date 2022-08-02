import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreenShellComponent } from './green-shell/green-shell.component';
import { RouterModule } from '@angular/router';
import { loadRemoteModule } from '@nrwl/angular/mfe';

@NgModule({
  declarations: [GreenShellComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () =>
          loadRemoteModule('green', './Module').then(
            (m) => m.RemoteEntryModule
          ),
        outlet: 'green',
      },
    ]),
  ],
  exports: [GreenShellComponent],
})
export class GreenLoaderModule {}

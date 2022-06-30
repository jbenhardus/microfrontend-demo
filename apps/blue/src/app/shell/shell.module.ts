import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { FeatureModule } from '@microfrontend-demo/feature';

import { StateModule } from '@microfrontend-demo/state';

@NgModule({
  declarations: [ShellComponent],
  imports: [CommonModule, FeatureModule],
  exports: [ShellComponent],
})
export class ShellModule {}

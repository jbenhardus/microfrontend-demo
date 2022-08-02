import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorOutputComponent } from './color-output/color-output.component';
import { StateModule } from '@microfrontend-demo/state';

@NgModule({
  declarations: [ColorOutputComponent],
  imports: [CommonModule, StateModule],
  exports: [ColorOutputComponent],
})
export class ColorOutputModule {}

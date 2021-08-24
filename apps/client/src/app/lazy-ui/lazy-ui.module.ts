import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyUiComponent } from './lazy-ui.component';



@NgModule({
  declarations: [
    LazyUiComponent
  ],
  exports: [
    LazyUiComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LazyUiModule { }

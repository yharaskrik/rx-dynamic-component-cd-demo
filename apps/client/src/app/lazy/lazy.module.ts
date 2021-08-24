import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';
import { DYNAMIC_COMPONENT } from '@trellisorg/rx-dynamic-component';
import { ReactiveComponentModule } from '@ngrx/component';
import { LazyUiModule } from '../lazy-ui/lazy-ui.module';



@NgModule({
  declarations: [
    LazyComponent
  ],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    LazyUiModule
  ],
  exports:[
    LazyComponent
  ],
  providers: [
    {
      provide: DYNAMIC_COMPONENT,
      useValue: LazyComponent
    }
  ]
})
export class LazyModule { }

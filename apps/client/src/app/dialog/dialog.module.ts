import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { Store } from './store';
import { DynamicOutletModule, RxDynamicComponentModule } from '@trellisorg/rx-dynamic-component';



@NgModule({
  declarations: [
    DialogComponent
  ],
  imports: [
    CommonModule,
    RxDynamicComponentModule.forFeature([
      {
        componentId: 'lazy',
        loadChildren: () => import('../lazy/lazy.module').then(m => m.LazyModule)
      },
    ]),
    DynamicOutletModule
  ],
  providers: [
    Store
  ]
})
export class DialogModule { }

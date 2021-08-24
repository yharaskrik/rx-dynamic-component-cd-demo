import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { DialogModule } from './dialog/dialog.module';
import { RxDynamicComponentModule } from '@trellisorg/rx-dynamic-component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatBottomSheetModule, DialogModule, RxDynamicComponentModule.forRoot({devMode: true})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

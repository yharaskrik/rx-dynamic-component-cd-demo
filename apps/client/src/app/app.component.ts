import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'ngrx-component-store-example-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'client';

  constructor(private _matBottomSheet: MatBottomSheet) {
  }

  open() {
    this._matBottomSheet.open(DialogComponent, {
      data: {
        name: 'Jay'
      }
    });
  }
}

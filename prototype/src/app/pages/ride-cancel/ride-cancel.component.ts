import { Component } from '@angular/core'
import {
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-ride-cancel',
  standalone: true,
  imports: [MatBottomSheetModule, RouterModule],
  templateUrl: './ride-cancel.component.html',
  styles: `
    ::ng-deep .mat-bottom-sheet-container {
      padding: unset;
    }
  `,
})
export class RideCancelComponent {
  constructor(private _bottomSheet: MatBottomSheetRef<RideCancelComponent>) {}

  public close() {
    this._bottomSheet.dismiss()
  }
}

import { Component } from '@angular/core'
import {
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-ride-finish',
  standalone: true,
  templateUrl: './ride-finish.component.html',
  imports: [MatBottomSheetModule, RouterModule],
  styles: `
    ::ng-deep .mat-bottom-sheet-container {
      padding: unset;
    }
  `,
})
export class RideFinishComponent {
  constructor(private _bottomSheet: MatBottomSheetRef<RideFinishComponent>) {}

  public close() {
    this._bottomSheet.dismiss()
  }
}

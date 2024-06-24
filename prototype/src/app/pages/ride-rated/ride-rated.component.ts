import { Component } from '@angular/core'
import {
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-ride-rated',
  standalone: true,
  imports: [MatBottomSheetModule, RouterModule],
  templateUrl: './ride-rated.component.html',
  styles: `
    ::ng-deep .mat-bottom-sheet-container {
      padding: unset;
    }
  `,
})
export class RideRatedComponent {
  constructor(private _bottomSheet: MatBottomSheetRef<RideRatedComponent>) {}

  public close() {
    this._bottomSheet.dismiss()
  }
}

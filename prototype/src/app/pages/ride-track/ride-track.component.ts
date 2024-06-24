import { Component } from '@angular/core'
import {
  MatBottomSheet,
  MatBottomSheetModule,
} from '@angular/material/bottom-sheet'
import { RideCancelComponent } from '../ride-cancel/ride-cancel.component'
import { RideFinishComponent } from '../ride-finish/ride-finish.component'

@Component({
  selector: 'app-ride-track',
  standalone: true,
  imports: [MatBottomSheetModule],
  templateUrl: './ride-track.component.html',
})
export class RideTrackComponent {
  constructor(private _bottomSheet: MatBottomSheet) {}

  cancelTrip(): void {
    this._bottomSheet.open(RideCancelComponent)
  }

  finishTrip(): void {
    this._bottomSheet.open(RideFinishComponent)
  }
}

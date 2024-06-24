import { Component } from '@angular/core'
import {
  MatBottomSheet,
  MatBottomSheetModule,
} from '@angular/material/bottom-sheet'
import { RideDetailsComponent } from '../ride-details/ride-details.component'

@Component({
  selector: 'app-ride-selection',
  standalone: true,
  imports: [MatBottomSheetModule],
  templateUrl: './ride-selection.component.html',
})
export class RideSelectionComponent {
  constructor(private _bottomSheet: MatBottomSheet) {}

  openRideDetails(): void {
    this._bottomSheet.open(RideDetailsComponent, { hasBackdrop: true })
  }
}

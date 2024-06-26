import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { RideCreationComponent } from '../ride-creation/ride-creation.component';

@Component({
  selector: 'app-driver-home',
  standalone: true,
  imports: [MatBottomSheetModule],
  templateUrl: './driver-home.component.html'
})
export class DriverHomeComponent {
  constructor(private _bottomSheet: MatBottomSheet) { }

  openRideCreation(): void {
    this._bottomSheet.open(RideCreationComponent);
  }
}

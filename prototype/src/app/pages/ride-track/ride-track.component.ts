import { Component } from '@angular/core'
import {
  MatBottomSheet,
  MatBottomSheetModule,
} from '@angular/material/bottom-sheet'
import { RideCancelComponent } from '../ride-cancel/ride-cancel.component'

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
    alert('Viagem finalizada. Você chegou ao seu destino.')
  }
}

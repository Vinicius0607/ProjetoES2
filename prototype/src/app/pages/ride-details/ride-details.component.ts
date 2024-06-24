import { Component } from '@angular/core'
import {
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-ride-details',
  standalone: true,
  imports: [MatBottomSheetModule, RouterModule],
  templateUrl: './ride-details.component.html',
  styles: `
    ::ng-deep .mat-bottom-sheet-container {
      padding: unset;
    }
  `,
})
export class RideDetailsComponent {
  private _accepted: boolean = false

  constructor(private _bottomSheet: MatBottomSheetRef<RideDetailsComponent>) {}

  public close() {
    this._bottomSheet.dismiss()
  }

  public set accepted(hasAccepted: boolean) {
    this._accepted = hasAccepted
  }

  public get accepted(): boolean {
    return this._accepted
  }
}

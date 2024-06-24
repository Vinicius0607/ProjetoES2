import { Component } from '@angular/core'
import {
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-ride-report',
  standalone: true,
  imports: [MatBottomSheetModule, RouterModule],
  templateUrl: './ride-report.component.html',
  styles: `
    ::ng-deep .mat-bottom-sheet-container {
      padding: unset;
    }
  `,
})
export class RideReportComponent {
  constructor(private _bottomSheet: MatBottomSheetRef<RideReportComponent>) {}

  public close(): void {
    this._bottomSheet.dismiss()
  }
}

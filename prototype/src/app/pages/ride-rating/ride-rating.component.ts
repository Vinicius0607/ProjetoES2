import { Component } from '@angular/core'
import {
  MatBottomSheet,
  MatBottomSheetModule,
} from '@angular/material/bottom-sheet'
import { RouterModule } from '@angular/router'
import { RideReportComponent } from '../ride-report/ride-report.component'
import { RideRatedComponent } from '../ride-rated/ride-rated.component'
import { RideBlockComponent } from '../ride-block/ride-block.component'

@Component({
  selector: 'app-ride-rating',
  standalone: true,
  imports: [RouterModule, MatBottomSheetModule],
  templateUrl: './ride-rating.component.html',
  styles: `
    .star:hover {
      & polygon {
        fill: yellow !important;
        stroke: yellow !important;
      }
    }

    .chips > button:hover {
      span,
      p {
        color: white;
      }
    }
  `,
})
export class RideRatingComponent {
  constructor(private _bottomSheet: MatBottomSheet) {}

  public openBanDetails(): void {
    this._bottomSheet.open(RideBlockComponent)
  }

  public openReportDetails(): void {
    this._bottomSheet.open(RideReportComponent)
  }

  public submitRate(): void {
    this._bottomSheet.open(RideRatedComponent)
  }
}

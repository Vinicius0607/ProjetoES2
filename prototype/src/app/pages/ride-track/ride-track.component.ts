import { Component } from '@angular/core'

@Component({
  selector: 'app-ride-track',
  standalone: true,
  imports: [],
  templateUrl: './ride-track.component.html',
})
export class RideTrackComponent {
  constructor() {}

  cancelTrip(): void {
    alert('Viagem cancelada.')
  }

  finishTrip(): void {
    alert('Viagem finalizada. Você chegou ao seu destino.')
  }
}

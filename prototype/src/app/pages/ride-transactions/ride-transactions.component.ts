import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-ride-transactions',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './ride-transactions.component.html',
})
export class RideTransactionsComponent {
  public get now(): string {
    return new Date().toLocaleDateString('pt-BR', { dateStyle: 'medium' })
  }
}

import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-setup-account',
  standalone: true,
  imports: [],
  templateUrl: './setup-account.component.html',
})
export class SetupAccountComponent {
  constructor(private router: Router) {}

  public handleContinue() {
    this.router.navigate(['pages/ride-selection'])
  }
}

import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(private router: Router) {}

  public handleSubmit() {
    this.router.navigate(['pages/user-type'])
  }

  public handleSignUp() {
    this.router.navigate(['auth/setup-account'])
  }
}

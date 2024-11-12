import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticatorService } from '@aws-amplify/ui-angular';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(
    public authenticator: AuthenticatorService,
    private router: Router
  ) { }

  onSignOut() {
    this.authenticator.signOut();
    this.router.navigate(['/'])
  }
}

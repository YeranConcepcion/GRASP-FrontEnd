import { Component } from '@angular/core';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(public authenticator: AuthenticatorService){}

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { MyProfileComponent } from '../my-profile/my-profile.component';



@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(
    public authenticator: AuthenticatorService,
    private router: Router,
    public dialog: Dialog
  ) { }

  onSignOut() {
    this.authenticator.signOut();
    this.router.navigate(['/'])
  }

  openProfileModal(): void {
    console.log("Opening profile modal...");
    this.dialog.open(MyProfileComponent, {
      width: '400px', // Adjust as needed
      height: '300px', // Adjust as needed
    });
  }

}

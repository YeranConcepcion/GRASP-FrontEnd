import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { MyProfileComponent } from '../my-profile/my-profile.component';
import { getCurrentUser, fetchUserAttributes } from 'aws-amplify/auth';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  userInfo: any = {
    username: '',
    email: '',
    email_verified: '',
    sub: ''
  };
  constructor(
    public authenticator: AuthenticatorService,
    private router: Router,
    public dialog: Dialog
  ) { }
  ngOnInit(): void {
    this.fetchUserInfo();
  }

  onSignOut() {
    this.authenticator.signOut();
    this.router.navigate(['/'])
  }
  async fetchUserInfo() {
    try {
      const user = await getCurrentUser();
      this.userInfo.username = user.username;

      const attributes = await fetchUserAttributes();
      this.userInfo.email = attributes.email || 'Email unavailable';
      this.userInfo.email_verified = attributes.email_verified;
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  }



}

import { Component, OnInit } from '@angular/core';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { getCurrentUser, fetchUserAttributes } from 'aws-amplify/auth';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  userInfo: any = {
    username: '',
    email: '',
    email_verified: '',
    sub: ''
  };

  constructor(public authenticator: AuthenticatorService) { }

  ngOnInit(): void {
    this.fetchUserInfo();
  }

  async fetchUserInfo() {
    try {
      // Fetch the authenticated user's basic info
      const user = await getCurrentUser();
      this.userInfo.username = user.username;

      // Fetch additional user attributes and store them directly
      const attributes = await fetchUserAttributes();
      console.log('Fetched Attributes:', attributes);
      this.userInfo.email = attributes.email || 'Email unavailable';
      this.userInfo.email_verified = attributes.email_verified;

    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  }
}

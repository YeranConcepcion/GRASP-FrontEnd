import { Component, OnInit } from '@angular/core';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { getCurrentUser, fetchUserAttributes } from 'aws-amplify/auth';
import { DialogRef } from '@angular/cdk/dialog';  // Use DialogRef from CDK

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

  constructor(
    public authenticator: AuthenticatorService,
    public dialogRef: DialogRef<MyProfileComponent>,  // Use DialogRef from CDK
  ) { }

  ngOnInit(): void {
    this.fetchUserInfo();
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

  closeModal(): void {
    console.log('Closing Modal...');
    this.dialogRef.close();
  }
}

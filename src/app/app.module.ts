import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {Amplify} from "aws-amplify"
import { environment } from '../environments/environment';
import { AmplifyAuthenticatorModule } from "@aws-amplify/ui-angular";

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: environment.cognitoConfig.userPoolId,
      userPoolClientId: environment.cognitoConfig.clientId
    }
  }
});

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAuthenticatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { Amplify } from "aws-amplify"
import { environment } from '../environments/environment';
import { AmplifyAuthenticatorModule } from "@aws-amplify/ui-angular";


import { DisplayMapComponent } from './components/maplibre/map.component';
import { GasMapComponent } from './components/gas-map/gas-map.component';
import { NgxMapLibreGLModule } from '@maplibre/ngx-maplibre-gl';
import { NgStyle } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { DialogModule } from '@angular/cdk/dialog';
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
    NavbarComponent,
    DisplayMapComponent,
    GasMapComponent,
    AboutUsComponent,
    MyProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMapLibreGLModule,
    NgStyle,
    AmplifyAuthenticatorModule,
    DialogModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DisplayMapComponent } from './components/maplibre/map.component';
import { GasMapComponent } from './components/gas-map/gas-map.component';
import { NgxMapLibreGLModule} from '@maplibre/ngx-maplibre-gl';
import { NgStyle } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    DisplayMapComponent,
    GasMapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMapLibreGLModule,
    NgStyle,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }

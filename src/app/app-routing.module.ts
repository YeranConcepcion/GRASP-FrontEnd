import { AboutUsComponent } from './components/about-us/about-us.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { GasMapComponent } from './components/gas-map/gas-map.component';
import { authGuard } from './guards/auth.guard';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { HowToComponent } from './how-to/how-to.component';

const routes: Routes = [

  {
    path: "map",
    component: GasMapComponent
  },
 

  {
    path: 'about-us',
    component: AboutUsComponent
  },

  {
    path: 'my-profile',
    component: MyProfileComponent
  },
  {
    path: 'howto',
    component: HowToComponent
  },
   {
    path: "**",
    component: HomeComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

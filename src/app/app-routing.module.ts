import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { GasMapComponent } from './components/gas-map/gas-map.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
 
  {
    path: "map",
    component: GasMapComponent
  },
  // {
  //   path: "**",
  //   component: HomeComponent
  // },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

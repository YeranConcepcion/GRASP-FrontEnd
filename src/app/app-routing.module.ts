import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [

  {
    path: "home",
    component: HomeComponent,
    canActivate:[authGuard]
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "**",
    component: LoginComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

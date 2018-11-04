import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthGuard } from './auth.guard';

  const routes: Routes = [
    {path : 'home' , component: HomeComponent, canActivate: [AuthGuard]},
    {path : 'login', component: LoginComponent},
    {path : 'register', component : RegisterComponent},
    {path : 'admin', component : AdminComponent},
    {path: '', redirectTo: 'login', pathMatch : 'full'},
    {path: '**', component: PagenotfoundComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes , {enableTracing: true})], // debugging flag true
  exports: [RouterModule]
})
export class AppRoutingModule { }

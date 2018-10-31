import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

  const routes: Routes = [
    {path : 'home' , component: HomeComponent},
    {path : 'login', component: LoginComponent},
    {path : 'register', component : RegisterComponent},
    {path : 'admin', component : AdminComponent},
    {path: '', redirectTo: 'home', pathMatch : 'full'},
    {path: '**', component: PagenotfoundComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes , {enableTracing: true})], // debugging flag true
  exports: [RouterModule]
})
export class AppRoutingModule { }

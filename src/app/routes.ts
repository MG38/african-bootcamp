import { Component } from "@angular/core";
import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";

export const appRoutes:Routes = [
    {path: 'login', component: LoginComponent },
    {path: 'home', component: HomeComponent },
    {path: 'sign-up', component: SignupComponent },
    {path: '', redirectTo:'home', pathMatch:'full' },
    // {path: '**', redirectTo:'home', pathMatch:'full' }
]
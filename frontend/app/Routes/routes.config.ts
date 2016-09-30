import {Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "../Login/login";
import {HomeComponent} from "../Home/home";
import {Error404Page} from "../Error404/Error404Page";
import {RegisterComponent} from "../register/register";

const appRoutes: Routes = [

    {path:'', redirectTo:'home',  pathMatch: 'full'},
    {path:'home', component: HomeComponent },
    {path:'login', component: LoginComponent},
    {path:'register', component: RegisterComponent}
];

export const appRoutingProviders: any = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

import {Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "../Login/login";

const appRoutes: Routes = [
    {path:'/build/Login/login', name: 'Login', component: LoginComponent, useAsDefault: true},
    // {path: '/register', name:'Register', component: Register}
];

export const appRoutingConfig: any = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

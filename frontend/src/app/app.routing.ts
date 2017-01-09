/**
 * Created by jochampa on 1/6/17.
 */

import {RouterModule, Routes} from "@angular/router";
import {RegisterComponent} from "./user/register/register";
import {LoginComponent} from "./user/Login/login";
import {HomeComponent} from "./Home/home";

export const appRoutes: Routes = [

    {path:'', redirectTo:'home',  pathMatch: 'full'},
    {path:'home', component: HomeComponent },
    {path:'login', component: LoginComponent},
    {path:'register', component: RegisterComponent}
];

export const routing = RouterModule.forRoot(appRoutes);

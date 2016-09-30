import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {LoginComponent} from "./Login/login";
import {LoginService} from "./Login/login.service";
import {HomeComponent} from "./Home/home";
import {NavigationBar} from "./NavBar/NavigationBar";
import {routing, appRoutingProviders }  from './Routes/routes.config';
import {HttpModule,JsonpModule} from '@angular/http';
import {User} from "./Model/User";
import {RegisterComponent} from "./register/register";
import {RegisterService} from "./register/registerService";
import {RegisterModel} from "./register/registerModel";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule,
        JsonpModule
    ],

    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        NavigationBar,
        RegisterComponent
    ],

    providers:[
        LoginService,
        appRoutingProviders,
        RegisterService,
        User,
        RegisterModel
    ],

    bootstrap: [AppComponent]
})
export class AppModule {

}

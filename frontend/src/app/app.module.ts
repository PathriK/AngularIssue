
import {AppComponent} from "./app.component";
import {routing} from './app.routing';
import {UserModule} from "./user/UserModule";
import {SmartAdminModule} from "./shared/smartadmin.module";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HomeComponent} from "./Home/home";


@NgModule({
    imports: [

        BrowserModule, //prevents XXS attacks

        routing,

        SmartAdminModule.forRoot(),
        UserModule.forRoot()
    ],

    declarations: [
        AppComponent,
        HomeComponent
    ],

    providers:[],

    bootstrap: [AppComponent]
})
export class AppModule {

}


import {AppComponent} from "./app.component";
import {routing} from './app.routing';
import {UserModule} from "./user/UserModule";
import {SmartAdminModule} from "./shared/smartadmin.module";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HomeComponent} from "./Home/home";
import {HomeModule} from "./Home/home.module";
import {APP_BASE_HREF} from '@angular/common';


@NgModule({
    imports: [

        BrowserModule, //prevents XXS attacks
        HomeModule,
        routing,

        SmartAdminModule.forRoot(),
        UserModule.forRoot()
    ],

    declarations: [
        AppComponent
    ],

    providers:[{provide: APP_BASE_HREF, useValue : '/' }],

    bootstrap: [AppComponent]
})
export class AppModule {

}

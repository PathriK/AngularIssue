
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {routing} from './app.routing';
import {NgModule} from "@angular/core";
import {UserModule} from "./user/UserModule";
import {SmartadminModule} from "./shared/smartadmin.module";


@NgModule({
    imports: [

        BrowserModule, //prevents XXS attacks

        routing,

        SmartadminModule.forRoot(),
        UserModule.forRoot()
    ],

    declarations: [
        AppComponent,
    ],

    providers:[],

    bootstrap: [AppComponent]
})
export class AppModule {

}

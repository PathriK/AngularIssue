/**
 * Created by jochampa on 1/6/17.
 */

import {NgModule} from "@angular/core";
import {NavigationBarComponent} from "./NavigationBar";
import {UserModule} from "../user/UserModule";
import {HomeComponent} from "../Home/home";
import {AppModule} from "../app.module";

@NgModule({

    imports:[
        HomeComponent,
        UserModule,
    ],

    declarations: [NavigationBarComponent],
    exports: [NavigationBarComponent]
})
export class NavBarModule {

}

/**
 * Created by jochampa on 1/9/17.
 */
import {NgModule} from "@angular/core";
import {LoginComponent} from "./login";
import {SmartAdminModule} from "../../shared/smartadmin.module";
import {NavigationBarComponent} from "../../NavBar/NavigationBar";

@NgModule({

    imports: [
        SmartAdminModule,

    ],
    exports: [
        LoginComponent
    ],

    declarations: [
        LoginComponent
    ]

})
export class LoginModule{

}
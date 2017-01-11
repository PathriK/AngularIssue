/**
 * Created by jochampa on 1/9/17.
 */
import {NgModule} from "@angular/core";
import {LoginComponent} from "./login";
import {SmartAdminModule} from "../../shared/smartadmin.module";

@NgModule({

    imports: [
        LoginComponent,
        SmartAdminModule
    ],
    exports: [
        LoginComponent
    ]

})
export class LoginModule{

}
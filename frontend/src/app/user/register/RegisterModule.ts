/**
 * Created by jochampa on 1/9/17.
 */
import {RegisterComponent} from "./register";
import {NgModule} from "@angular/core";
import {SmartAdminModule} from "../../shared/smartadmin.module";

@NgModule({

    imports: [
        SmartAdminModule
    ],
    exports: [RegisterComponent],

    declarations: [RegisterComponent]

})
export class RegisterModule{

}
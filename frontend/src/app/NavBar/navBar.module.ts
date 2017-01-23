/**
 * Created by jochampa on 1/6/17.
 */

import {NgModule} from "@angular/core";
import {NavigationBarComponent} from "./NavigationBar";
import {UserModule} from "../user/UserModule";
import {SmartAdminModule} from "../shared/smartadmin.module";
import {UserService} from "../user/UserService";

@NgModule({

    imports:[
        SmartAdminModule,
        UserModule
    ],

    declarations: [NavigationBarComponent],

    exports: [NavigationBarComponent],

    providers: [UserService]
})
export class NavBarModule {

}

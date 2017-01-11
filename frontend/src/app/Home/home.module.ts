/**
 * Created by jochampa on 1/9/17.
 */
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home";
import {UserModule} from "../user/UserModule";
import {NavBarModule} from "../NavBar/navBar.module";
import {SmartAdminModule} from "../shared/smartadmin.module";

@NgModule({

    imports:[
        SmartAdminModule,
        UserModule,
        NavBarModule
    ],

    exports:[HomeComponent],

    declarations: [HomeComponent]

})
export class HomeModule {


}


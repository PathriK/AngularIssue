/**
 * Created by jochampa on 1/9/17.
 */
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home";
import {UserModule} from "../user/UserModule";

@NgModule({

    imports:[
        HomeComponent,
        UserModule
    ],

    exports:[HomeComponent]

})
export class HomeModule{


}


/**
 * Created by jochampa on 1/9/17.
 */
import {NgModule, ModuleWithProviders} from "@angular/core";
import {LoginComponent} from "./Login/login";
import {RegisterComponent} from "./register/register";
import {RegisterService} from "./register/registerService";
import {LoginService} from "./Login/login.service";
import {LoginModule} from "./Login/LoginModule";
import {RegisterModule} from "./register/RegisterModule";


@NgModule({

    imports: [
        LoginModule,
        RegisterModule
    ],

    declarations: [RegisterComponent, LoginComponent],
    exports: [RegisterComponent, LoginComponent]

})
export class UserModule {
    static forRoot():ModuleWithProviders {
        return{ngModule: UserModule,
            providers: [RegisterService, LoginService]
        }
    }
}
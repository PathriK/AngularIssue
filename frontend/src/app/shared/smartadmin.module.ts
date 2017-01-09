import {ModuleWithProviders, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
/**
 * Created by jochampa on 1/9/17.
 */

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        RouterModule
    ],

    exports: [
        CommonModule, FormsModule, HttpModule, RouterModule
    ]
})

export class SmartAdminModule {

    static forRoot():ModuleWithProviders {
        return {
            ngModule: SmartAdminModule,
            providers: []
        };
    }

}
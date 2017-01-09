/**
 * Created by jochampa on 12/30/16.
 */

import {AppModule} from "./src/app/app.module";
import {environment} from "./src/environments/environment";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {enableProdMode} from "@angular/core";


if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
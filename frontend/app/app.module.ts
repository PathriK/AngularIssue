import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {LoginComponent} from "./Login/login";
import {LoginService} from "./Login/login.service";

@NgModule({
    imports: [BrowserModule, FormsModule],

    declarations: [AppComponent,
        LoginComponent],

    providers:[LoginService],

    bootstrap: [AppComponent]
})
export class AppModule {

}

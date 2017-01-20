import {Component, Input} from "@angular/core";
import {LoginService} from "../user/Login/login.service";
import {RegisterService} from "../user/register/registerService";

@Component({
    selector:'nav-bar',
    templateUrl:'./navigationBar.html',
})

export class NavigationBarComponent{

    constructor (private loginService:LoginService, registerService:RegisterService) { }

    private loginUser:boolean;

    showLogin() {
        this.loginUser = true;
        console.log("show login pressed")
    }
}

import {Component, Input} from "@angular/core";
import {LoginService} from "../user/Login/login.service";
import {RegisterService} from "../user/register/registerService";
import {UserService} from "../user/UserService";

@Component({
    selector:'nav-bar',
    templateUrl:'./navigationBar.html',
})

export class NavigationBarComponent{

    constructor (private userService: UserService) { }


    showLogin(){
        this.userService.registered = true;
    }

    showRegister(){
        this.userService.registered = false;
    }


}

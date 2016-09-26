import {Component} from '@angular/core';
import {LoginModel} from "./login.model";
import {LoginService} from "./login.service";

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl:'./login.html'
})

export class LoginComponent{

    login:LoginModel = new LoginModel();

    constructor(public loginService:LoginService){

    }

    onSubmit() {

    }
}
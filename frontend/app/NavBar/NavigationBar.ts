import {Component} from "@angular/core";
import {LoginService} from "../Login/login.service";
import {RegisterService} from "../register/registerService";

@Component({
    moduleId: module.id,
    selector:'nav-bar',
    templateUrl:'./navigationBar.html'
})

export class NavigationBar{

    constructor (private loginService:LoginService, registerService:RegisterService) {

    }
}

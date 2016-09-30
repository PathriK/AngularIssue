import {Component} from "@angular/core";
import {LoginService} from "./login.service";
import {User} from "../Model/User";

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: './login.html'
})

export class LoginComponent {

    user: User = new User();

    constructor(public loginService: LoginService) {

    }

    onSubmit() {
        this.loginService.login(this.user);
    }

}
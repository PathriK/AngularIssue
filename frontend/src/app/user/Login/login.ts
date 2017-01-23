import {Component} from "@angular/core";
import {LoginService} from "./login.service";
import {User} from "../../Model/User";
import {UserService} from "../UserService";

@Component({
    selector: 'login',
    templateUrl: './login.html'
})

export class LoginComponent {

    user: User = new User();

    constructor(public loginService: LoginService, private userService: UserService) {

    }

    onSubmit() {
        this.loginService.login(this.user);
    }

}
/**
 * Created by KEYSTONE_USER on 9/20/16.
 */
import {Component} from "@angular/core";
import {UserService} from "../user/UserService";

@Component({
    selector:'home',
    templateUrl:'./home.html',
})

export class HomeComponent {

    registered: Boolean;

    constructor(private userService: UserService) {

        this.registered = this.userService.registered;
    }

}
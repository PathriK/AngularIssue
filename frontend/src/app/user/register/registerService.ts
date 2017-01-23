import {Headers, Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {RegisterModel} from "./registerModel";
import {UserService} from "../UserService";

@Injectable()
export class RegisterService {

    constructor (private http:Http, private userService: UserService) { }

    sendUser (newUser: RegisterModel) {
        let url = "http://localhost:8080/user/register";
        let header = new Headers({'Content-Type': 'application/json'});

        this.userService.registered = true;

        return this.http.post(url, JSON.stringify(newUser),{headers: header});
    }
}

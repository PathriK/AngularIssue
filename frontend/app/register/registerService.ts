import {Headers, Http} from "@angular/http";
import {User} from "../Model/User";
import {Injectable} from "@angular/core";
import {RegisterModel} from "./registerModel";

@Injectable()
export class RegisterService {

    constructor (private http:Http) { }

    sendUser (newUser: RegisterModel) {
        let url = "http://localhost:8080/user/register";
        let header = new Headers({'Content-Type': 'application/json'});

        return this.http.post(url, JSON.stringify(newUser),{headers: header});
    }
}

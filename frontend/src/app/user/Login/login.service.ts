import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {UserService} from "../UserService";

@Injectable()
export class LoginService {

    constructor(private http:Http, private userService: UserService){ }

    login(user){
        let url = 'http://localhost:8080/user/login';
        let header = new Headers({'Content-Type': 'application/json'});
        console.log(user.userName);
        console.log(user.password);

        this.userService.registered = false;

        return this.http.post(url, JSON.stringify(user),{headers: header});
    }


    logout() {
        localStorage.setItem("token","");
        localStorage.setItem("currentUserName","");
        alert("You have been logged out.")
    }


}


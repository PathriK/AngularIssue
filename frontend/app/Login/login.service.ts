import {Injectable, Inject} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';

@Injectable()
export class LoginService {

    constructor(private http:Http){

    }

    login(user){
        let url = 'http://localhost:8080/user/login';
        let header = new Headers({'Content-Type': 'application/json'});
        console.log(user.userName);
        console.log(user.password);
        return this.http.post(url, JSON.stringify(user),{headers: header});
    }


    logout() {
        localStorage.setItem("token","");
        localStorage.setItem("currentUserName","");
        alert("You have been logged out.")
    }


}


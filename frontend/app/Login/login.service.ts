import {Injectable, Inject} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable
export class LoginService {

    output(){
        console.log("You are in the service output class...");
    }
}


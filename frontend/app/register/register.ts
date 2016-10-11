import {RegisterService} from "./registerService";
import {Component} from "@angular/core";
import {RegisterModel} from "./registerModel";

@Component ({
    moduleId: module.id,
    selector: 'register',
    templateUrl: './register.html'
})
export class RegisterComponent {

    newUser: RegisterModel = new RegisterModel();

    constructor (private registerService: RegisterService){

    }

    onSubmit() {
        this.registerService.sendUser(this.newUser).subscribe(
            data => {
                this.newUser = new RegisterModel();
                console.log("New user was created.")
            },
            error => console.log(error)
        );
    }
}

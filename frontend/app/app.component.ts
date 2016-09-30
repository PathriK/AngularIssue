import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
         <nav-bar></nav-bar>
         <router-outlet></router-outlet>
`
})
export class AppComponent {

}

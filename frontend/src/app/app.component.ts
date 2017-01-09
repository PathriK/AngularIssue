import {Component, ViewContainerRef} from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<router-outlet></router-outlet>'

})
export class AppComponent {

    title:string = 'App Works!';

    private viewContainerRef: ViewContainerRef;

    constructor(viewContainerRef: ViewContainerRef){
        this.viewContainerRef = viewContainerRef;
    }

}

import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `<navmenu></navmenu>
    <router-outlet></router-outlet>
    `
})
export class AppComponent {
    ChildEvent(event) {
        console.log(event);
    }
}

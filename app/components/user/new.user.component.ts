import { Component, OnInit } from '@angular/core';
import { COUNTRIES } from './country';

@Component({
    moduleId: module.id,
    selector: 'new-user',
    templateUrl: '../../../../../app/components/user/new.user.component.html',
    styles: [`input.ng-invalid.ng-touched {
        border: 1px solid red;
    }
    select.ng-invalid.ng-touched {
        border: 1px solid red;
    }

    input.ng-valid.ng-touched {
        border: 1px solid green;
    }
    select.ng-valid.ng-touched {
        border: 1px solid green;
    }
    `]
})
export class NewUserComponent implements OnInit {
    user: User;
    countries: any[];

    constructor() {
        this.user = new User();
    }

    ngOnInit() {
        this.countries = COUNTRIES;
    }

    submit(event: Event) {
        console.log(this.user);
    }
}

class User {
    firstName: string;
    middleName: String;
    lastName: String;
    email: String;
    street: String;
    city: String;
    country: String;
}
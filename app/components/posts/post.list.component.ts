import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'post-list',
    template: `Yet to..`
})
export class PostListComponent {
    constructor(private _userService: UserService) {

    }

    ngOnInit() {
        this._userService.getUsers()
            .subscribe((data) => {
                console.log(data);
            });
    }
}
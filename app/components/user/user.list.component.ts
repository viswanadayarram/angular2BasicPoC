import {
    Component, Input, Output,
    OnInit, EventEmitter
} from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { SearchComponent} from '../search/search.component';

@Component({
    selector: 'user-list',
    templateUrl: 'app/components/user/user.list.component.html',
    styleUrls: ['app/components/user/user.list.component.css']
})
export class UserListComponent implements OnInit {
    @Input("userdata") users: any[] = [];
    @Output() goClicked: EventEmitter<any> = new EventEmitter<any>();
    searchFilter: string = "";
    isDetailsView: boolean = true;
    filteredData: any[];

    constructor(private _userService: UserService, private _router: Router) {}

    toggle(isDetailsView) {
        this.isDetailsView = isDetailsView;
    }

    ngOnInit() {
        this._userService.getUsers().subscribe((users) => {
            this.filteredData = this.users = users;
        }, error => {
            console.error("Error in UserList", error);
        });
    }

    onSearch(searchFilter:string):void {
        this.filteredData = this.users.filter((item) => {
            return item.name.toLowerCase().indexOf(searchFilter.toLowerCase()) > -1;
        });
    }

    onClear():void {
        this.filteredData = this.users;
    }

    showUser(user) {
        this._router.navigate(['/users', user.id]);
    }

}
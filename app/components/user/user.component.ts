import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AlbumService } from '../../services/albums.service';
import { TodoService } from '../../services/todo.service';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: '../../../../../app/components/user/user.component.html',
    styleUrls: ['../../../../../app/components/user/user.component.css']
})

export class UserComponent implements OnInit {
    usr: any = {};
    posts: any = [];
    albums: any = [];
    todos: any = [];
    constructor(private aroute: ActivatedRoute,
        private _userService: UserService,
        private _albumService: AlbumService,
        private _todoService: TodoService) { }

    ngOnInit() {
        this.aroute.params.subscribe((params) => {
            let userId = params['id'];

            this._userService.getUser(userId).subscribe((user) => {
                this.usr = user;
            });

            this._userService.getPosts(userId).subscribe((userPosts) => {
                this.posts = userPosts;
            });

            this._albumService.getAlbumsByUserId(userId).subscribe((userAlbums) => {
                this.albums = userAlbums;
            });

            this._todoService.getTodosByUserId(userId).subscribe((userTodos) => {
                this.todos = userTodos;
            });
        });
    }
}
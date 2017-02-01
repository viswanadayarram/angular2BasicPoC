import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'todo',
    templateUrl: '../../../../../app/components/todo/todo.component.html',
    providers: [TodoService]
})
export class TodoComponent implements OnInit {
    todos: any[];
    constructor(private _todoService: TodoService,
        private aroute: ActivatedRoute) {

    }

    ngOnInit() {
        //console.log("Direct cal:", this.aroute.params.['id']);
        this.aroute.params.subscribe((data) => {
            let userid = data['id'];
            if (userid) {
                this._todoService.getTodosByUserId(userid).subscribe((data) => {
                    this.todos = data;
                    console.log(data);
                });
            } else {
                this._todoService.getTodos().subscribe((data) => {
                    this.todos = data;
                });
            }

        });

    }
}
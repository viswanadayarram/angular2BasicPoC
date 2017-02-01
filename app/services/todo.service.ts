import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class TodoService {
    url: string = "https://jsonplaceholder.typicode.com/";
    constructor(private _http: Http) { }

    getTodos() {
        let todoUrl = this.url + 'todos'; //`${this.url}todos`
        return this._http.get(todoUrl)
            .map((res) => { return res.json(); })
            .catch((error) => {
                console.log("Todos Service - Error");
                return Observable.throw(error || 'Server error: Todos Service failed to retrive information.')
            });
    }

    getTodosByUserId(id) {
        let todoUrl = `${this.url}todos`;
        return this._http.get(todoUrl + '?userId=' + id)
            .map((res) => { return res.json(); })
            .catch((error) => {
                console.log("Todos Service - Error");
                return Observable.throw(error || 'Server error: Todos Service failed to retrive information.')
            });
    }

}
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class UserService {
    private _serviceURL = 'http://jsonplaceholder.typicode.com/';
    private users: any[] = [];
    count = 0;
    constructor(private _http: Http) { }

    getUsers(): Observable<any> {
        this.count += 1;
        let url = this._serviceURL + 'users';
        return this._http.get(url)
            .map((response) => response.json())
            .catch((error) => {
                console.log("User Service - Error");
                return Observable.throw(error || 'Server error: User Service failed to retrive information.')
            });

    }

    getUser(userId): Observable<any> {
        let usersUrl = `${this._serviceURL}users`;
        return this._http.get(usersUrl + '/' + userId)
            .map((res) => res.json())
            .catch((error) => {
                console.log("User Service - Error");
                return Observable.throw(error || 'Server error: User Service failed to retrive information.')
            });
    }

    getPosts(userId): Observable<any> {
        let postsUrl = `${this._serviceURL}posts`;
        return this._http.get(postsUrl + '?userId=' + userId)
            .map((res) => res.json())
            .catch((error) => {
                console.log("Post Service - Error");
                return Observable.throw(error || 'Server error: Post Service failed to retrive information.')
            });
    }
}
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class AlbumService {
    url: string = "https://jsonplaceholder.typicode.com/";
    constructor(private _http: Http) { }

    getAlbums() {
        let albumsUrl = this.url + 'albums'; //`${this.url}todos`
        return this._http.get(albumsUrl)
            .map((res) => { return res.json(); })
            .catch((error) => {
                console.log("Album Service - Error");
                return Observable.throw(error || 'Server error: Album Service failed to retrive information.')
            });
    }

    getAlbumsByUserId(id) {
        let albumUrl = `${this.url}albums`;
        return this._http.get(albumUrl + '?userId=' + id)
            .map((res) => { return res.json(); })
            .catch((error) => {
                console.log("Album Service - Error");
                return Observable.throw(error || 'Server error: Album Service failed to retrive information.')
            });
    }

}
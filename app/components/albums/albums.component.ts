import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../services/albums.service';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from '../search/search.component';

@Component({
    moduleId: module.id,
    selector: 'album',
    templateUrl: '../../../../../app/components/albums/albums.component.html',
    providers: [AlbumService]
})
export class AlbumsComponent implements OnInit {
    albums: any[];
    filteredAlbums: any[];

    constructor(private _albumsService: AlbumService,
        private aroute: ActivatedRoute) {

    }

    onSearch(searchFilter: string): void {
        this.filteredAlbums = this.albums.filter((item) => {
            return item.title.toLowerCase().indexOf(searchFilter.toLowerCase()) > -1;
        });
    }

    onClear(): void {
        this.filteredAlbums = this.albums;
    }

    ngOnInit() {
        this.aroute.params.subscribe((data) => {
            let userid = data['id'];
            if (userid) {
                this._albumsService.getAlbumsByUserId(userid).subscribe((data) => {
                    this.filteredAlbums = this.albums = data;
                    console.log(data);
                });
            } else {
                this._albumsService.getAlbums().subscribe((data) => {
                    this.filteredAlbums = this.albums = data;
                });
            }

        });

    }


}
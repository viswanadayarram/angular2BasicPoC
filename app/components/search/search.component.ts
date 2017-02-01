import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'search-component',
    templateUrl: 'app/components/search/search.component.html',
    styleUrls: ['app/components/search/search.component.css']
})
export class SearchComponent implements OnInit {
    @Input() parentName: string;
    @Output() search: EventEmitter<any> = new EventEmitter<any>();
    searchFilter: string = "";

    ngOnInit() { }
    onClick() {
        this.search.emit(this.searchFilter);
    }
    clear() {
        this.searchFilter = "";
        this.search.emit(this.searchFilter);
    }
}
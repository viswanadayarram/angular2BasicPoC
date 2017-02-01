import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { APP_ROUTES } from './app.routes';

import { AlbumsComponent } from './components/albums/albums.component';
import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { NavComponent } from './components/nav/nav.component';
import { NewUserComponent } from './components/user/new.user.component';
import { PostListComponent } from './components/posts/post.list.component';
import { TodoComponent } from './components/todo/todo.component';
import { UserComponent } from './components/user/user.component';
import { UserListComponent } from './components/user/user.list.component';
import { SearchComponent } from './components/search/search.component';

import { UserService } from './services/user.service';
import { AlbumService } from './services/albums.service';
import { TodoService } from './services/todo.service';
import 'hammerjs';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(APP_ROUTES), MaterialModule.forRoot()],
    declarations: [
        AlbumsComponent,
        AppComponent,
        HighlightDirective,
        NavComponent,
        NewUserComponent,
        PostListComponent,
        TodoComponent,
        UserComponent,
        UserListComponent,
        SearchComponent
    ],
    bootstrap: [AppComponent],
    providers: [UserService, AlbumService, TodoService]
})
export class AppModule { }

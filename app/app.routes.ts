import { Routes } from '@angular/router';
import { UserListComponent } from './components/user/user.list.component';
import { NewUserComponent } from './components/user/new.user.component'
import { TodoComponent } from './components/todo/todo.component';
import { UserComponent } from './components/user/user.component';
import { AlbumsComponent } from './components/albums/albums.component';

export const APP_ROUTES: Routes = [
  {
    path: '', component: UserListComponent
  },
  {
    path: 'users',
    children: [
      {
        path: 'new', component: NewUserComponent,
      },
      {
        path: ':id', component: UserComponent
      },
      {
        path: '', component: UserListComponent
      }

    ]

  },

  {
    path: 'todos',
    component: TodoComponent
  },
  {
    path: 'todos/:id', component: TodoComponent
  },
  {
    path: 'albums',
    children: [
      {
        path: ':id', component: AlbumsComponent,
      },
      {
        path: '', component: AlbumsComponent
      }
    ]
  }
];
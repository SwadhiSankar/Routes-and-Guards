import { Routes } from '@angular/router';

import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { UserTasksComponent } from './users/user-tasks/user-tasks.component';
import { routes as UserRoute } from './users/users.routes';
import { NotFoundComponent } from './not-found/not-found.component';
export const routes: Routes = [
  {
    path: '',
    component: NoTaskComponent,
  },

  {
    path: 'users/:userId', //:userId dynamic path
    component: UserTasksComponent,
    children: UserRoute,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

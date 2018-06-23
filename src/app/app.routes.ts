import { CoursesComponent } from './sidebar/courses/courses.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { ErrorComponent } from './error/error.component';
import { Routes } from '@angular/router';
import { StudentComponent } from './sidebar/student/student.component';
import { MainComponent } from './main/main.component';

export const ROUTES: Routes = [
    {
    path: 'error', component: ErrorComponent
      }, {
    path: 'unauthorized', component: UnauthorizedComponent
  },
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'app-login', component: LoginComponent,
  },
  {
    path: 'app-student', component: StudentComponent,
  },
  {
    path: 'app-courses', component: CoursesComponent,
  },
  {
    path: 'app-main', component: MainComponent,
  }
];

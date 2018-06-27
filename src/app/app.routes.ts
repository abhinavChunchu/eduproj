import { CoursesComponent } from './sidebar/courses/courses.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { Routes } from '@angular/router';
import { StudentComponent } from './sidebar/courses/student/student.component';
import { MainComponent } from './main/main.component';

export const ROUTES: Routes = [
  {
    path: 'error', component: ErrorComponent
  },
  {
    path: '', component: HomeComponent,
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

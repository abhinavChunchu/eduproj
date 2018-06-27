import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CommonService {

  constructor(private httpClient: HttpClient) {
  }

  getCourses(): Observable<any> {
    return this.httpClient.get('../../assets/mock-data/courses.json');
  }

  getStudents(courseName): Observable<any> {
    return this.httpClient.get('../../assets/mock-data/students.json');
  }

  getFacultyChart(): Observable<any> {
    return this.httpClient.get('../../assets/mock-data/faculty-chart.json');
  }
}

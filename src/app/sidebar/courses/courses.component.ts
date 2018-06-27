import { CommonService } from './../../model/common-service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  @Output() private student = new EventEmitter();
  private courseList: any[];
  private studentList1: any[] = [];
  private imagePath = '../../../assets/images/identity.svg';
  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.getCourses().subscribe(res  => this.courseList = res, error => console.log(error));
  }
  studentDetails(student: any) {
    console.log(student);
    this.student.emit(student);
  }

  getStudents(course: any) {
    this.commonService.getStudents(course.courseName).subscribe(res  => this.studentList1 = res);
  }
  onTabOpen(data: any) {
    this.getStudents(data);
  }
  onTabClose(course) {

  }
}

import { CommonService } from './../../model/common-service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

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
    this.commonService.getCourses().subscribe(res => this.courseList = res, error => console.log(error));
  }
  studentDetails(student: any) {
    this.student.emit(this.studentList1);
  }

  getStudents(course: any) {
    console.log(course);
    this.commonService.getStudents(course.courseName).subscribe(res => {
      if (res) {
        this.studentList1 = res;
      }
      if (this.studentList1) {
        this.student.emit(this.studentList1);
      }
    });

  }

  showCourse(course: any) {
    return ' (' + course.courseStartDate + '-' + course.courseEndDate + ') ';
  }

}

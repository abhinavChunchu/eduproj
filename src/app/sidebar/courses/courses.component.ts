import { StudentComponent } from './student/student.component';
import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  @ViewChild(StudentComponent) sidebarData: StudentComponent ;
  private courseList: any[];
  private studentList1: any;
  private studentList2: any;
  private studentList3: any;
  private students: any;
  private hidecourse = true;
  constructor() { }

  @Output() course = new EventEmitter<any>();

  ngOnInit() {
    this.courseList = [
      {
        'courseId': 'OSIRIS:445565664',
        'courseName': 'MTH/509',
        'courseEndDate': '2018-07-22',
        'courseStartDate': '2018-04-22'
      },
      {
        'courseId': 'OSIRIS:897787877',
        'courseName': 'SCI/877',
        'courseEndDate': '2018-07-23',
        'courseStartDate': '2018-04-30'
      },
      {
        'courseId': 'OSIRIS:12',
        'courseName': 'PHY/211',
        'courseEndDate': '2018-07-22',
        'courseStartDate': '2018-04-22'
      },
      {
        'courseId': 'OSIRIS:13',
        'courseName': 'SCO/125',
        'courseEndDate': '2018-07-23',
        'courseStartDate': '2018-04-30'
      },
      {
        'courseId': 'OSIRIS:14',
        'courseName': 'MTH/509',
        'courseEndDate': '2018-07-22',
        'courseStartDate': '2018-04-22'
      },
      {
        'courseId': 'OSIRIS:15',
        'courseName': 'SCI/877',
        'courseEndDate': '2018-07-23',
        'courseStartDate': '2018-04-30'
      }
    ];
    this.studentList1 = [
      {
        'profileId': '568594eerd',
        'studentName': 'Jack',
        'imgSrc': ''
      },
      {
        'profileId': '12345eereds',
        'studentName': 'NickleSon',
        'imgSrc': ''
      },
      {
        'profileId': '78773njkhcg',
        'studentName': 'Jordan',
        'imgSrc': ''
      },
      {
        'profileId': '12345eereds',
        'studentName': 'Jack NickleSon',
        'imgSrc': ''
      },
      {
        'profileId': '78773njkhcg',
        'studentName': 'Will Smith',
        'imgSrc': ''
      },
      {
        'profileId': '568594eerd',
        'studentName': 'Randy',
        'imgSrc': ''
      },
      {
        'profileId': '00564fgd',
        'studentName': 'Brad',
        'imgSrc': ''
      },
      {
        'profileId': '78773njkhcg',
        'studentName': 'Dwayne smith',
        'imgSrc': ''
      }
    ];
    this.studentList2 = [
      {
        'profileId': '568594eerd',
        'studentName': 'Randy',
        'imgSrc': ''
      },
      {
        'profileId': '00564fgd',
        'studentName': 'Brad',
        'imgSrc': ''
      },
      {
        'profileId': '78773njkhcg',
        'studentName': 'Dwayne smith',
        'imgSrc': ''
      },
      {
        'profileId': '568594eerd',
        'studentName': 'Will Smith',
        'imgSrc': ''
      },
      {
        'profileId': '78773njkhcg',
        'studentName': 'Will Smith',
        'imgSrc': ''
      },
      {
        'profileId': '568594eerd',
        'studentName': 'Randy',
        'imgSrc': ''
      },
      {
        'profileId': '00564fgd',
        'studentName': 'Brad',
        'imgSrc': ''
      },
      {
        'profileId': '78773njkhcg',
        'studentName': 'Dwayne smith',
        'imgSrc': ''
      }
    ];
    this.studentList3 = [
      {
        'profileId': '78773njkhcg',
        'studentName': 'Dwayne smith',
        'imgSrc': ''
      },
      {
        'profileId': '568594eerd',
        'studentName': 'Brad Smith',
        'imgSrc': ''
      },
      {
        'profileId': '12345eereds',
        'studentName': 'Jack NickleSon',
        'imgSrc': ''
      },
      {
        'profileId': '78773njkhcg',
        'studentName': 'Will',
        'imgSrc': ''
      },
      {
        'profileId': '568594eerd',
        'studentName': 'Jack',
        'imgSrc': ''
      },
      {
        'profileId': '12345eereds',
        'studentName': 'NickleSon',
        'imgSrc': ''
      },
      {
        'profileId': '78773njkhcg',
        'studentName': 'Jordan',
        'imgSrc': ''
      },
      {
        'profileId': '12345eereds',
        'studentName': 'Jack NickleSon',
        'imgSrc': ''
      }
    ];
  }
  onclick(course: any) {
    this.hidecourse = false;
    this.getStudents(course);
  }

  getCours(course: any) {
    this.course = course;
  }

  getStudents(course: any) {
    switch (course.courseId) {
      case 'OSIRIS:897787877': this.students = this.studentList1;
        break;
      case 'OSIRIS:445565664': this.students = this.studentList2;
        break;
      case 'OSIRIS:12': this.students = this.studentList3;
        break;
      case 'OSIRIS:13': this.students = this.studentList1;
        break;
      case 'OSIRIS:14': this.students = this.studentList3;
        break;
      case 'OSIRIS:15': this.students = this.studentList2;
        break;
    }
  }

}

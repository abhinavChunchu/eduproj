import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public studData:any;
  private courseList: any;
  private course: any;
  private hideCourse: boolean = true;
  constructor(private router:Router) { }

  ngOnInit() {
    this.courseList = [
      {
        "courseId": "OSIRIS:445565664",
        "courseName": "MTH/509",
        "courseEndDate": "2018-07-22",
        "courseStartDate": "2018-04-22"
      },
      {
        "courseId": "OSIRIS:897787877",
        "courseName": "SCI/877",
        "courseEndDate": "2018-07-23",
        "courseStartDate": "2018-04-30"
      },
      {
        "courseId": "OSIRIS:445565664",
        "courseName": "PHY/211",
        "courseEndDate": "2018-07-22",
        "courseStartDate": "2018-04-22"
      },
      {
        "courseId": "OSIRIS:897787877",
        "courseName": "SCO/125",
        "courseEndDate": "2018-07-23",
        "courseStartDate": "2018-04-30"
      },
      {
        "courseId": "OSIRIS:445565664",
        "courseName": "MTH/509",
        "courseEndDate": "2018-07-22",
        "courseStartDate": "2018-04-22"
      },
      {
        "courseId": "OSIRIS:897787877",
        "courseName": "SCI/877",
        "courseEndDate": "2018-07-23",
        "courseStartDate": "2018-04-30"
      }
    ]
  }
  
  getCours(course:any){
    this.course = course;
    this.hideCourse = false;
  }

  public sethideCourse(event:any){
    this.hideCourse = event;
  }

  studentData(data){
    this.studData = data;
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  @Input() public courseStudents:any;
  @Output() courseHide = new EventEmitter<boolean>();
  @Output() studentdata = new EventEmitter<any>();
  constructor(private router:Router) { }

  ngOnInit() {
  }

  goBack(event: any){
    this.courseHide.emit(event);
  }
  onclick(student:any){
    this.studentdata.emit(student);
  }
}

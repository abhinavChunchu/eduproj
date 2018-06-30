import { Component, OnInit, ViewChild, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Output() private studData: any[];
  constructor() { }

  ngOnInit() {
  }

  studentDetails(student) {
    this.studData = student;
  }
}

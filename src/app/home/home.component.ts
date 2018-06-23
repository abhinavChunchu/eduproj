import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private studData: any;
  constructor() { }

  ngOnInit() {
  }

  stdData(studData: any) {
    this.studData = studData;
  }

}

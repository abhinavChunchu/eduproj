import { CoursesComponent } from './../sidebar/courses/courses.component';
import { CommonService } from './../model/common-service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChild(CoursesComponent) private studentDetails: CoursesComponent;

  @Input() private studentData: any[];
  private imagePath = '../../../assets/images/chart.svg';
  private report = '../../../assets/images/report.svg';
  private data: any;
  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.getFacultyChart().subscribe(res => this.data = res);
    console.log(this.studentData);
  }


}

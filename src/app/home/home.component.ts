import { Component, OnInit, ViewChild } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(SidebarComponent) sidebarData:SidebarComponent ;
  private studData: any;
  constructor() { }

  ngOnInit() {
  }

  stdData(studData:any){
    this.studData = studData;
  }

}

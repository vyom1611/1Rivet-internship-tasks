import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.css']
})
export class TaskbarComponent implements OnInit {
  public myName: string;

  constructor() {
    this.myName = "vyom";
  }

  ngOnInit(): void {

  }

}

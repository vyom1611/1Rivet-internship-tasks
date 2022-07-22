import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mentor-list',
  templateUrl: './mentor-list.component.html',
  styleUrls: ['./mentor-list.component.css']
})
export class MentorListComponent implements OnInit {
  public name: string = "vyom";
  public imgSrc: string = "example.com";
  public mentorList: string[];

  constructor() {
    this.mentorList = ["Pratik", "Aayushi", "Viral"]
  }

  ngOnInit(): void {
  }

  onClick = () => {
    console.log("button clicked")
  }

}

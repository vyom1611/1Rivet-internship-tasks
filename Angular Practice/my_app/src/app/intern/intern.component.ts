import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intern',
  templateUrl: './intern.component.html',
  styleUrls: ['./intern.component.css']
})
export class InternComponent implements OnInit {
  public data: string;

  //Variable set by child component
  public text: string | undefined;

  constructor() {
    this.data = "Parent info"
  }

  ngOnInit(): void {
  }


  //Getting message by child
  receiveMessage($event: any) {
    this.text = $event
  }
}

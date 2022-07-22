import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intern-list',
  templateUrl: './intern-list.component.html',
  styleUrls: ['./intern-list.component.css']
})
export class InternListComponent implements OnInit {
  public isGood: boolean;
  public intern: string;

  constructor() {
    this.isGood = true;
    this.intern = "vyom";
  }

  ngOnInit(): void {
  }

}

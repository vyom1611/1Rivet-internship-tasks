import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-intern-list',
  templateUrl: './intern-list.component.html',
  styleUrls: ['./intern-list.component.css']
})
export class InternListComponent implements OnInit {
  public isGood: boolean;
  public intern: string;

  @Input() public ParentData: string | undefined;

  @Output() public ChildData: EventEmitter<any>;

  constructor() {
    this.isGood = true;
    this.intern = "vyom!!!!!";
    this.ChildData = new EventEmitter<any>();

  }

  ngOnInit(): void {
  }

  sendMessageToParent() {
    this.ChildData.emit(this.intern)
  }

}

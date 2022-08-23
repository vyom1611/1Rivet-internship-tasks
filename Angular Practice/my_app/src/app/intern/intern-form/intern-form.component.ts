import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-intern-form',
  templateUrl: './intern-form.component.html',
  styleUrls: ['./intern-form.component.css']
})
export class InternFormComponent implements OnInit {

  public internForm: FormGroup

  constructor() {
    this.internForm = new FormGroup({
      name:  new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
    })
  }

  ngOnInit(): void {
  }

  get interFormControls() {
    return this?.internForm?.controls;
  }

  onSubmit() {
    console.log(this.internForm.value)
  }
}

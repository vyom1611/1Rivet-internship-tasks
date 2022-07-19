import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentorListComponent } from './mentor-list/mentor-list.component';
import { MentorFormComponent } from './mentor-form/mentor-form.component';



@NgModule({
  declarations: [
    MentorListComponent,
    MentorFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MentorModule { }

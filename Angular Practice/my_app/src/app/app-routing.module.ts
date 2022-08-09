import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternListComponent } from './intern/intern-list/intern-list.component';
import { MentorListComponent } from './mentor/mentor-list/mentor-list.component';
import { MentorFormComponent } from './mentor/mentor-form/mentor-form.component';
import { InternFormComponent } from './intern/intern-form/intern-form.component';
import {InternComponent} from "./intern/intern.component";


const routes: Routes =  [
  {
    path: '',
    redirectTo: 'intern',
    pathMatch: 'full'
  },
  {
    path: 'intern',
    component: InternComponent
  },
  {
    path: 'intern-list',
    component: InternListComponent
  },
  {
    path: 'mentor-list',
    component: MentorListComponent,
  },
  {
    path: 'mentor-form',
    component: MentorFormComponent,
  },
  {
    path: 'intern-form',
    component: InternFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

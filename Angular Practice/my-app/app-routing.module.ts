import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternListComponent } from './intern/intern-list/intern-list.component';
import { MentorListComponent } from './mentor/mentor-list/mentor-list.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'taskbar',
  pathMatch: 'full'
},
{
  path: 'mentor',
  component: InternListComponent
},
{
  path: 'intern',
  component: MentorListComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }

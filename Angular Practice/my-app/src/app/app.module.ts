import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MentorListComponent } from './mentor-list/mentor-list.component';
import { MentorFormComponent } from './mentor-form/mentor-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MentorListComponent,
    MentorFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

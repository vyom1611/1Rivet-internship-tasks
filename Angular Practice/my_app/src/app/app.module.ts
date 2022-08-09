import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InternFormComponent } from './intern/intern-form/intern-form.component';
import { InternListComponent } from './intern/intern-list/intern-list.component';
import { MentorFormComponent } from './mentor/mentor-form/mentor-form.component';
import { MentorListComponent } from './mentor/mentor-list/mentor-list.component';
import { TaskbarComponent } from './taskbar/taskbar.component';
import { UserListComponent } from './user-list/user-list.component';
import {InternComponent} from "./intern/intern.component";

@NgModule({
    declarations: [
        AppComponent,
        UserListComponent,
        TaskbarComponent,
        InternListComponent,
        InternFormComponent,
        MentorListComponent,
        MentorFormComponent,
        InternComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
    ],
    providers: [],
    exports: [
        InternListComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

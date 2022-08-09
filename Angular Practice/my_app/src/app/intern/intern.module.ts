import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternFormComponent } from './intern-form/intern-form.component';
import { InternListComponent } from './intern-list/intern-list.component';
import { InternComponent } from './intern.component';
import {AppModule} from "../app.module";



@NgModule({
  declarations: [
    InternFormComponent,
  ],
    imports: [
        CommonModule,
        AppModule
    ]
})
export class InternModule { }

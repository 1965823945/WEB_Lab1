import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SubjectCenterComponent } from './subject-center/subject-center.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { SubjectDetailsComponent } from './subject-details/subject-details.component';
import { SubjectRoutingModule } from './subject-routing.module';



@NgModule({
  declarations: [
    SubjectCenterComponent,
    SubjectListComponent,
    SubjectDetailsComponent
  ],
  imports: [
    CommonModule,
    SubjectRoutingModule,
    FormsModule
  ]
})
export class SubjectsModule { }

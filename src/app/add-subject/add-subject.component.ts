import { Component, Input, OnInit } from '@angular/core';
import { Subject } from '../subjects/subject';
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { Observable, pipe, from } from "rxjs";
import { SubjectsService } from "../subjects/subjects.service";

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent {
  subject: Subject;
  subjects$: Observable<Subject[]>;
  @Input() subject_id: number;
  @Input() subject_name: string;
  @Input() subject_teacher: string;
  isEditing: boolean = false;

  constructor(private service: SubjectsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.subject = { id: 0, name: '', teacher: '' };
  }


  ngOnInit() {
    this.subjects$ = this.service.getSubjects();


  }

  onSubmit() {
    this.subject.id = this.subject_id;
    this.subject.name = this.subject_name;
    this.subject.teacher = this.subject_teacher;
    console.log("on submit");
    console.log(this.subject.name);
    this.service.create(this.subject).then(result => this.gotoSubjectList());
  }

  gotoSubjectList() {

    this.router.navigate(['/subject-center']);

  }




}

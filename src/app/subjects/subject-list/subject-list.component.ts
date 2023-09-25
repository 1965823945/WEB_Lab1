import { Component, OnInit } from '@angular/core';
import { Subject } from '../subject';
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { SubjectsService } from "src/app/subjects/subjects.service";

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit{
 subjects$: Observable<Subject[]>;
 selectedId: number;
constructor( private service: SubjectsService, private route: ActivatedRoute)
  { 
	this.subjects$=new Observable;
	this.selectedId=1;
//this.subjects$=this.service.getSubjects();
  }

 ngOnInit(): void {
this.subjects$=this.service.getSubjects();
}

}

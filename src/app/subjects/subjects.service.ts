import { Injectable } from '@angular/core';
import { SUBJECTS } from "src/app/subjects/mock-subject-list";
import { Subject } from './subject';
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
private subjects: Subject[]=[];
  constructor() {
    this.subjects=SUBJECTS;
 }
getSubjects():Observable<Subject[]>{return of(SUBJECTS)}

getSubject(id: number | string): Observable<Subject> {
    return this.getSubjects().pipe(
      map((subjects: Subject[]) => subjects.find(subject => subject.id === +id))
    );
}
async create(subject: Subject) {

this.subjects.push(subject);

}

async delete(subject: Subject) {
//id : number;
const index=subject.id;
this.subjects.slice(index, 1);

}

}
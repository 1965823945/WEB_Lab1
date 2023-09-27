import { Injectable } from '@angular/core';
import { SUBJECTS } from "src/app/subjects/mock-subject-list";
import { Subject } from './subject';
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
  private subjects: Subject[] = [];
  constructor() {
    this.subjects = SUBJECTS;
  }
  getSubjects(): Observable<Subject[]> {
     return of(SUBJECTS) }

  getSubject(id: number | string): Observable<Subject> {
    return this.getSubjects().pipe(
      map((subjects: Subject[]) => subjects.find(subject => subject.id === +id))
    );
  }
  public sort(arr:Array<number>): void {
    for(let i: number = 0; i < arr.length - 1; i++) {
      let flag:boolean = false; // 防止数组已经有序而继续排序
  
      for(let j: number = 0; j < arr.length - i - 1; j++) {
        if(arr[j] > arr[j + 1]) { // 交换两个
          let temp:number = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
  
          flag = true;
        }
      }
    }
  }
  async create(subject: Subject) {

    this.subjects.push(subject);
    

  }
  async update(subject: Subject){
    console.log(subject.id, subject.name, subject.teacher);
    const ind = this.subjects.findIndex((obj) => obj.id === subject.id);
    console.log("ind =", ind);
    if (ind !== -1) {
      this.subjects.splice(ind, 1,subject);
    }
  }

  async delete(subject: Subject) {
    console.log(subject.id, subject.name, subject.teacher);
    const ind = this.subjects.findIndex((obj) => obj.id === subject.id);
    console.log("ind =", ind);
    if (ind !== -1) {
      this.subjects.splice(ind, 1);
    }

  }

}



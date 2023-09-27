import { Component, OnInit, Input } from '@angular/core';
import { Subject } from '../subject';
import { Observable, pipe } from "rxjs";
import { Location } from '@angular/common';
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { SubjectsService } from '../subjects.service';


@Component({
	selector: 'app-subject-details',
	templateUrl: './subject-details.component.html',
	styleUrls: ['./subject-details.component.css']
})
export class SubjectDetailsComponent implements OnInit {
	// subject$: Observable<Subject>;
	@Input() subject: Subject;
	@Input() editName: String;
	@Input() editTeacher: String;

	constructor(private service: SubjectsService,
		private route: ActivatedRoute,
		private router: Router
	) { }
	ngOnInit() {
		let id;
		this.route.paramMap.subscribe((paramMap) => {
			id = +paramMap.get("id"),
				this.service.getSubject(id).subscribe(subject => {
					this.subject = subject;
					this.editName = this.subject.name;
					this.editTeacher = this.subject.teacher;
					console.log('editName : ' + this.editName);
					console.log('editTeacher : ' + this.editTeacher);
				});
		}
		);
	}
	onUpdate() {
		this.service.update(this.subject).then(result => this.gotoSubjectList());
	}
	
	onDelete() {
		this.service.delete(this.subject).then(result => this.gotoSubjectList());
	}
	gotoSubjectList() {

		this.router.navigate(['/subject-center']);

	}
}

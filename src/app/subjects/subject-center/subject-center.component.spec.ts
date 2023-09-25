import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectCenterComponent } from './subject-center.component';

describe('SubjectCenterComponent', () => {
  let component: SubjectCenterComponent;
  let fixture: ComponentFixture<SubjectCenterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubjectCenterComponent]
    });
    fixture = TestBed.createComponent(SubjectCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

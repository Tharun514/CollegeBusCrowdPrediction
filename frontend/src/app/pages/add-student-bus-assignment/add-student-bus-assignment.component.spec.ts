import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentBusAssignmentComponent } from './add-student-bus-assignment.component';

describe('AddStudentBusAssignmentComponent', () => {
  let component: AddStudentBusAssignmentComponent;
  let fixture: ComponentFixture<AddStudentBusAssignmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddStudentBusAssignmentComponent]
    });
    fixture = TestBed.createComponent(AddStudentBusAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

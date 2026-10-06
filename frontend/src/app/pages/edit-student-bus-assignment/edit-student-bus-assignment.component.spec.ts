import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStudentBusAssignmentComponent } from './edit-student-bus-assignment.component';

describe('EditStudentBusAssignmentComponent', () => {
  let component: EditStudentBusAssignmentComponent;
  let fixture: ComponentFixture<EditStudentBusAssignmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditStudentBusAssignmentComponent]
    });
    fixture = TestBed.createComponent(EditStudentBusAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

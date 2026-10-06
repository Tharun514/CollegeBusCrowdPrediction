import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentBusAssignmentComponent } from './student-bus-assignment.component';

describe('StudentBusAssignmentComponent', () => {
  let component: StudentBusAssignmentComponent;
  let fixture: ComponentFixture<StudentBusAssignmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentBusAssignmentComponent]
    });
    fixture = TestBed.createComponent(StudentBusAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

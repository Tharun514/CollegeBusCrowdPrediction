import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentComplaintComponent } from './student-complaint.component';

describe('StudentComplaintComponent', () => {
  let component: StudentComplaintComponent;
  let fixture: ComponentFixture<StudentComplaintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentComplaintComponent]
    });
    fixture = TestBed.createComponent(StudentComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

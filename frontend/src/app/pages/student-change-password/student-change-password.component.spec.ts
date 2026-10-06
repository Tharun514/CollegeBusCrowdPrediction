import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentChangePasswordComponent } from './student-change-password.component';

describe('StudentChangePasswordComponent', () => {
  let component: StudentChangePasswordComponent;
  let fixture: ComponentFixture<StudentChangePasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentChangePasswordComponent]
    });
    fixture = TestBed.createComponent(StudentChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

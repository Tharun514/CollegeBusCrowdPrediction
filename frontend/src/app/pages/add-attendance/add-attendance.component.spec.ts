import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAttendanceComponent } from './add-attendance.component';

describe('AddAttendanceComponent', () => {
  let component: AddAttendanceComponent;
  let fixture: ComponentFixture<AddAttendanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAttendanceComponent]
    });
    fixture = TestBed.createComponent(AddAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

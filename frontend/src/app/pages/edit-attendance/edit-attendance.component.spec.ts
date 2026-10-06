import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAttendanceComponent } from './edit-attendance.component';

describe('EditAttendanceComponent', () => {
  let component: EditAttendanceComponent;
  let fixture: ComponentFixture<EditAttendanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAttendanceComponent]
    });
    fixture = TestBed.createComponent(EditAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

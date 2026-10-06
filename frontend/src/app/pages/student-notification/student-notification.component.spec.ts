import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentNotificationComponent } from './student-notification.component';

describe('StudentNotificationComponent', () => {
  let component: StudentNotificationComponent;
  let fixture: ComponentFixture<StudentNotificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentNotificationComponent]
    });
    fixture = TestBed.createComponent(StudentNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

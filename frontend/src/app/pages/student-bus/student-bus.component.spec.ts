import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentBusComponent } from './student-bus.component';

describe('StudentBusComponent', () => {
  let component: StudentBusComponent;
  let fixture: ComponentFixture<StudentBusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentBusComponent]
    });
    fixture = TestBed.createComponent(StudentBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRouteComponent } from './student-route.component';

describe('StudentRouteComponent', () => {
  let component: StudentRouteComponent;
  let fixture: ComponentFixture<StudentRouteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentRouteComponent]
    });
    fixture = TestBed.createComponent(StudentRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

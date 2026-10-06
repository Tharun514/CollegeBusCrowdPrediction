import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentThemeComponent } from './student-theme.component';

describe('StudentThemeComponent', () => {
  let component: StudentThemeComponent;
  let fixture: ComponentFixture<StudentThemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentThemeComponent]
    });
    fixture = TestBed.createComponent(StudentThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

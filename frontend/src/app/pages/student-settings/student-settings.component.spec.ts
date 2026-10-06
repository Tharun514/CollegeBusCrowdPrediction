import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSettingsComponent } from './student-settings.component';

describe('StudentSettingsComponent', () => {
  let component: StudentSettingsComponent;
  let fixture: ComponentFixture<StudentSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentSettingsComponent]
    });
    fixture = TestBed.createComponent(StudentSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

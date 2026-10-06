import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeLogoComponent } from './college-logo.component';

describe('CollegeLogoComponent', () => {
  let component: CollegeLogoComponent;
  let fixture: ComponentFixture<CollegeLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollegeLogoComponent]
    });
    fixture = TestBed.createComponent(CollegeLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminForgotPasswordComponent } from './admin-forgot-password.component';

describe('AdminForgotPasswordComponent', () => {
  let component: AdminForgotPasswordComponent;
  let fixture: ComponentFixture<AdminForgotPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminForgotPasswordComponent]
    });
    fixture = TestBed.createComponent(AdminForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComplaintComponent } from './add-complaint.component';

describe('AddComplaintComponent', () => {
  let component: AddComplaintComponent;
  let fixture: ComponentFixture<AddComplaintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddComplaintComponent]
    });
    fixture = TestBed.createComponent(AddComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

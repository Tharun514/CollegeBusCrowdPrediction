import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDriverComponent } from './add-driver.component';

describe('AddDriverComponent', () => {
  let component: AddDriverComponent;
  let fixture: ComponentFixture<AddDriverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDriverComponent]
    });
    fixture = TestBed.createComponent(AddDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

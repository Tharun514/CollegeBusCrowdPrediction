import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRouteComponent } from './add-route.component';

describe('AddRouteComponent', () => {
  let component: AddRouteComponent;
  let fixture: ComponentFixture<AddRouteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddRouteComponent]
    });
    fixture = TestBed.createComponent(AddRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

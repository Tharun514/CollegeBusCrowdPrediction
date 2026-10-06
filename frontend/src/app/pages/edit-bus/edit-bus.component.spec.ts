import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBusComponent } from './edit-bus.component';

describe('EditBusComponent', () => {
  let component: EditBusComponent;
  let fixture: ComponentFixture<EditBusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditBusComponent]
    });
    fixture = TestBed.createComponent(EditBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStopComponent } from './edit-stop.component';

describe('EditStopComponent', () => {
  let component: EditStopComponent;
  let fixture: ComponentFixture<EditStopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditStopComponent]
    });
    fixture = TestBed.createComponent(EditStopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusOccupancyComponent } from './bus-occupancy.component';

describe('BusOccupancyComponent', () => {
  let component: BusOccupancyComponent;
  let fixture: ComponentFixture<BusOccupancyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusOccupancyComponent]
    });
    fixture = TestBed.createComponent(BusOccupancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

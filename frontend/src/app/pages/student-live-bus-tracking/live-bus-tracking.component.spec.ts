import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveBusTrackingComponent } from './live-bus-tracking.component';

describe('LiveBusTrackingComponent', () => {
  let component: LiveBusTrackingComponent;
  let fixture: ComponentFixture<LiveBusTrackingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiveBusTrackingComponent]
    });
    fixture = TestBed.createComponent(LiveBusTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

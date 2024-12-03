import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreifMonitoringDetailsComponent } from './breif-monitoring-details.component';

describe('BreifMonitoringDetailsComponent', () => {
  let component: BreifMonitoringDetailsComponent;
  let fixture: ComponentFixture<BreifMonitoringDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BreifMonitoringDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BreifMonitoringDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

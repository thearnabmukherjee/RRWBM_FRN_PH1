import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualanalysisComponent } from './manualanalysis.component';

describe('ManualanalysisComponent', () => {
  let component: ManualanalysisComponent;
  let fixture: ComponentFixture<ManualanalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualanalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualanalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

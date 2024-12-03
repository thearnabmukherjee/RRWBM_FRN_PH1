import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIntakerouteComponent } from './view-intakeroute.component';

describe('ViewIntakerouteComponent', () => {
  let component: ViewIntakerouteComponent;
  let fixture: ComponentFixture<ViewIntakerouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewIntakerouteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewIntakerouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

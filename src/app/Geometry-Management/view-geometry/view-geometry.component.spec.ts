import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGeometryComponent } from './view-geometry.component';

describe('ViewGeometryComponent', () => {
  let component: ViewGeometryComponent;
  let fixture: ComponentFixture<ViewGeometryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewGeometryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGeometryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

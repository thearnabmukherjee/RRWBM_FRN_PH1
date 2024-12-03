import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGeometryComponent } from './create-geometry.component';

describe('CreateGeometryComponent', () => {
  let component: CreateGeometryComponent;
  let fixture: ComponentFixture<CreateGeometryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGeometryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGeometryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

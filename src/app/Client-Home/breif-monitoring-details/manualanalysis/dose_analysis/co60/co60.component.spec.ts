import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Co60Component } from './co60.component';

describe('Co60Component', () => {
  let component: Co60Component;
  let fixture: ComponentFixture<Co60Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Co60Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Co60Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

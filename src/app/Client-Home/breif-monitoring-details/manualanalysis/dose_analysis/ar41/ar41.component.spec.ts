import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ar41Component } from './ar41.component';

describe('Ar41Component', () => {
  let component: Ar41Component;
  let fixture: ComponentFixture<Ar41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ar41Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ar41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

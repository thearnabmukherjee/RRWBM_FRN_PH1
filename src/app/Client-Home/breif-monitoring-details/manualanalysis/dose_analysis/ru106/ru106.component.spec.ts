import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ru106Component } from './ru106.component';

describe('Ru106Component', () => {
  let component: Ru106Component;
  let fixture: ComponentFixture<Ru106Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ru106Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ru106Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

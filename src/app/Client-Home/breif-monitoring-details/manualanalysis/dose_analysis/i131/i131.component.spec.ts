import { ComponentFixture, TestBed } from '@angular/core/testing';

import { I131Component } from './i131.component';

describe('I131Component', () => {
  let component: I131Component;
  let fixture: ComponentFixture<I131Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [I131Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(I131Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sc46Component } from './sc46.component';

describe('Sc46Component', () => {
  let component: Sc46Component;
  let fixture: ComponentFixture<Sc46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Sc46Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Sc46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

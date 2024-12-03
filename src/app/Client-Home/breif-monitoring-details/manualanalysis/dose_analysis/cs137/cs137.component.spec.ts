import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cs137Component } from './cs137.component';

describe('Cs137Component', () => {
  let component: Cs137Component;
  let fixture: ComponentFixture<Cs137Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cs137Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cs137Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

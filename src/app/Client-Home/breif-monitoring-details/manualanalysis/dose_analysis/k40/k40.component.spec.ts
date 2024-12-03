import { ComponentFixture, TestBed } from '@angular/core/testing';

import { K40Component } from './k40.component';

describe('K40Component', () => {
  let component: K40Component;
  let fixture: ComponentFixture<K40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [K40Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(K40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

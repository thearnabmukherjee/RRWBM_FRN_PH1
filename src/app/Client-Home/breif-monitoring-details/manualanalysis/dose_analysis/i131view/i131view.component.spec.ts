import { ComponentFixture, TestBed } from '@angular/core/testing';

import { I131viewComponent } from './i131view.component';

describe('I131viewComponent', () => {
  let component: I131viewComponent;
  let fixture: ComponentFixture<I131viewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [I131viewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(I131viewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

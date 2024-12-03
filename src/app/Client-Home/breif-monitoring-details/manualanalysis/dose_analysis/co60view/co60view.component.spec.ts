import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Co60viewComponent } from './co60view.component';

describe('Co60viewComponent', () => {
  let component: Co60viewComponent;
  let fixture: ComponentFixture<Co60viewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Co60viewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Co60viewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

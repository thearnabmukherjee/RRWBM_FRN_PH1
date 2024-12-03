import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cs137viewComponent } from './cs137view.component';

describe('Cs137viewComponent', () => {
  let component: Cs137viewComponent;
  let fixture: ComponentFixture<Cs137viewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cs137viewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cs137viewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

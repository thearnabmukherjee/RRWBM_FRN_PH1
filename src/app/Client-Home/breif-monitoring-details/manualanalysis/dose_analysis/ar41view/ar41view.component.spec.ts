import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ar41viewComponent } from './ar41view.component';

describe('Ar41viewComponent', () => {
  let component: Ar41viewComponent;
  let fixture: ComponentFixture<Ar41viewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ar41viewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ar41viewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

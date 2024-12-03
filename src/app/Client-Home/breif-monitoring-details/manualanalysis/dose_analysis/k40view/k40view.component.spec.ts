import { ComponentFixture, TestBed } from '@angular/core/testing';

import { K40viewComponent } from './k40view.component';

describe('K40viewComponent', () => {
  let component: K40viewComponent;
  let fixture: ComponentFixture<K40viewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [K40viewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(K40viewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

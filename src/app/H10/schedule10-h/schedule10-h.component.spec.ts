import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Schedule10HComponent } from './schedule10-h.component';

describe('Schedule10HComponent', () => {
  let component: Schedule10HComponent;
  let fixture: ComponentFixture<Schedule10HComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Schedule10HComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Schedule10HComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixthcomComponent } from './sixthcom.component';

describe('SixthcomComponent', () => {
  let component: SixthcomComponent;
  let fixture: ComponentFixture<SixthcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SixthcomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SixthcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

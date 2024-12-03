import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthcomComponent } from './fourthcom.component';

describe('FourthcomComponent', () => {
  let component: FourthcomComponent;
  let fixture: ComponentFixture<FourthcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthcomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

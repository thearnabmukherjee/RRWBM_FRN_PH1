import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthcomComponent } from './fifthcom.component';

describe('FifthcomComponent', () => {
  let component: FifthcomComponent;
  let fixture: ComponentFixture<FifthcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FifthcomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FifthcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

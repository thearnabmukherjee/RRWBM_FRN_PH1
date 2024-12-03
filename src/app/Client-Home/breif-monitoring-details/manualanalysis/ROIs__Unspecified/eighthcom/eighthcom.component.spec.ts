import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EighthcomComponent } from './eighthcom.component';

describe('EighthcomComponent', () => {
  let component: EighthcomComponent;
  let fixture: ComponentFixture<EighthcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EighthcomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EighthcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

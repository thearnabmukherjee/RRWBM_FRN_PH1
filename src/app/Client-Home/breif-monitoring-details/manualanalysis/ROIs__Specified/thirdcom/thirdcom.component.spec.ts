import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdcomComponent } from './thirdcom.component';

describe('ThirdcomComponent', () => {
  let component: ThirdcomComponent;
  let fixture: ComponentFixture<ThirdcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdcomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

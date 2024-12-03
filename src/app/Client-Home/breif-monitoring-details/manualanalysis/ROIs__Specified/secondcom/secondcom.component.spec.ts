import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondcomComponent } from './secondcom.component';

describe('SecondcomComponent', () => {
  let component: SecondcomComponent;
  let fixture: ComponentFixture<SecondcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondcomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeventhcomComponent } from './seventhcom.component';

describe('SeventhcomComponent', () => {
  let component: SeventhcomComponent;
  let fixture: ComponentFixture<SeventhcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeventhcomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeventhcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

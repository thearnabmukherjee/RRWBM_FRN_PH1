import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRadionuclideComponent } from './view-radionuclide.component';

describe('ViewRadionuclideComponent', () => {
  let component: ViewRadionuclideComponent;
  let fixture: ComponentFixture<ViewRadionuclideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewRadionuclideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewRadionuclideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

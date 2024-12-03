import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRadionuclideComponent } from './create-radionuclide.component';

describe('CreateRadionuclideComponent', () => {
  let component: CreateRadionuclideComponent;
  let fixture: ComponentFixture<CreateRadionuclideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateRadionuclideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateRadionuclideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

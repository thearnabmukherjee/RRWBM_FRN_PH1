import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTldComponent } from './create-tld.component';

describe('CreateTldComponent', () => {
  let component: CreateTldComponent;
  let fixture: ComponentFixture<CreateTldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateTldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateTldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

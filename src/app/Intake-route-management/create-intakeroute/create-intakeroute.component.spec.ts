import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIntakerouteComponent } from './create-intakeroute.component';

describe('CreateIntakerouteComponent', () => {
  let component: CreateIntakerouteComponent;
  let fixture: ComponentFixture<CreateIntakerouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateIntakerouteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateIntakerouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

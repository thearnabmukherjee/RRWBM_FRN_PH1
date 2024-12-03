import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpManagementComponent } from './hp-management.component';

describe('HpManagementComponent', () => {
  let component: HpManagementComponent;
  let fixture: ComponentFixture<HpManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HpManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HpManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

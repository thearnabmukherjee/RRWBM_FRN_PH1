import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTldComponent } from './view-tld.component';

describe('ViewTldComponent', () => {
  let component: ViewTldComponent;
  let fixture: ComponentFixture<ViewTldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewTldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewTldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudEmployeeLandingComponent } from './crud-employee-landing.component';

describe('CrudEmployeeLandingComponent', () => {
  let component: CrudEmployeeLandingComponent;
  let fixture: ComponentFixture<CrudEmployeeLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrudEmployeeLandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrudEmployeeLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

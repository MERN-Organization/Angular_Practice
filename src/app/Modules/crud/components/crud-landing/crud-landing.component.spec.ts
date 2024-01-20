import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudLandingComponent } from './crud-landing.component';

describe('CrudLandingComponent', () => {
  let component: CrudLandingComponent;
  let fixture: ComponentFixture<CrudLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrudLandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrudLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

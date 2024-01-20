import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IoLandingComponent } from './io-landing.component';

describe('IoLandingComponent', () => {
  let component: IoLandingComponent;
  let fixture: ComponentFixture<IoLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IoLandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IoLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudAboutComponent } from './crud-about.component';

describe('CrudAboutComponent', () => {
  let component: CrudAboutComponent;
  let fixture: ComponentFixture<CrudAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrudAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrudAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudEmployeeFormComponent } from './crud-employee-form.component';

describe('CrudEmployeeFormComponent', () => {
  let component: CrudEmployeeFormComponent;
  let fixture: ComponentFixture<CrudEmployeeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrudEmployeeFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrudEmployeeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

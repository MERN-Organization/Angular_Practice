import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudEmployeeListComponent } from './crud-employee-list.component';

describe('CrudEmployeeListComponent', () => {
  let component: CrudEmployeeListComponent;
  let fixture: ComponentFixture<CrudEmployeeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrudEmployeeListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrudEmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

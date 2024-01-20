import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudSidebarComponent } from './crud-sidebar.component';

describe('CrudSidebarComponent', () => {
  let component: CrudSidebarComponent;
  let fixture: ComponentFixture<CrudSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrudSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrudSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

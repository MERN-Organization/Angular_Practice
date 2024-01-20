import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudTodoLandingComponent } from './crud-todo-landing.component';

describe('CrudTodoLandingComponent', () => {
  let component: CrudTodoLandingComponent;
  let fixture: ComponentFixture<CrudTodoLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrudTodoLandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrudTodoLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

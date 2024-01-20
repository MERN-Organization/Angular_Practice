import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudTodoFormComponent } from './crud-todo-form.component';

describe('CrudTodoFormComponent', () => {
  let component: CrudTodoFormComponent;
  let fixture: ComponentFixture<CrudTodoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrudTodoFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrudTodoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

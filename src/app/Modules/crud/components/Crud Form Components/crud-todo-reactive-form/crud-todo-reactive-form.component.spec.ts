import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudTodoReactiveFormComponent } from './crud-todo-reactive-form.component';

describe('CrudTodoReactiveFormComponent', () => {
  let component: CrudTodoReactiveFormComponent;
  let fixture: ComponentFixture<CrudTodoReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrudTodoReactiveFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrudTodoReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudTodoListComponent } from './crud-todo-list.component';

describe('CrudTodoListComponent', () => {
  let component: CrudTodoListComponent;
  let fixture: ComponentFixture<CrudTodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrudTodoListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrudTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

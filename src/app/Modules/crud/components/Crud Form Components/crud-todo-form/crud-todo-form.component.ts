import { Component } from '@angular/core';
import { TodoListService } from '../../../services/todo-list.service';

@Component({
  selector: 'app-crud-todo-form',
  templateUrl: './crud-todo-form.component.html',
  styleUrl: './crud-todo-form.component.css',
})
export class CrudTodoFormComponent {
  constructor(private todoListService: TodoListService) {}

  todoTitle: string = '';
  todoDescription: string = '';

  async onSubmit(todoForm: any) {
    if (todoForm.form.status === 'VALID') {
      const newObject = await this.newObjectCreation(todoForm);
      this.todoListService.generatePostTodoData(newObject);
    }
  }

  async newObjectCreation(formData: any) {
    let currentId = this.todoListService.getCurrentListDataLength() + 1;

    return {
      id: currentId.toString(),
      todoTitle: formData.form.value.todoTitle,
      todoDescription: formData.form.value.todoDescription,
      createdDate: '12/12/2021',
      lastEditedDate: '12/12/2515',
    };
  }
}

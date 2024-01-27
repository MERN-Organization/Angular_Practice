import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TodoListService } from '../../../services/todo-list.service';

@Component({
  selector: 'app-crud-todo-form',
  templateUrl: './crud-todo-form.component.html',
  styleUrl: './crud-todo-form.component.css',
})
export class CrudTodoFormComponent implements OnChanges {
  constructor(private todoListService: TodoListService) {}

  @Input() currentSelectFormData: any;

  ngOnChanges(changes: SimpleChanges) {
    
    console.log('THis are changes', changes);
  }

  async onSubmit(todoForm: any) {
    if (todoForm.form.status === 'VALID') {
      const newObject = await this.newObjectCreation(todoForm);
      this.todoListService.generatePostTodoData(newObject);
    }
    todoForm.resetForm();
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

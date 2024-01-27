import { Component, Input, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TodoListService } from '../../../services/todo-list.service';
import { AllModuleLoadService } from '../../../../../Global App Services/all-module-load.service';

@Component({
  selector: 'app-crud-todo-reactive-form',
  templateUrl: './crud-todo-reactive-form.component.html',
  styleUrl: './crud-todo-reactive-form.component.css',
})
export class CrudTodoReactiveFormComponent {
  todoForm = this.fb.group({
    todoTitle: ['', Validators.required],
    todoDescription: [''],
  });

  constructor(
    private fb: FormBuilder,
    private todoListService: TodoListService,
    private globalModuleServiceInstance: AllModuleLoadService,
  ) {}

  @Input() currentSelectFormData: any;

  public isEditMode: boolean = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['currentSelectFormData']) {
      this.fillFormValues(changes['currentSelectFormData'].currentValue);
    }
  }

  fillFormValues(currentValue: any) {
    if (currentValue !== undefined) {
      this.todoForm.setValue({
        todoTitle: currentValue.todoTitle,
        todoDescription: currentValue.todoDescription,
      });
      this.isEditMode = true;
    }
  }

  async onSubmit() {
    if (this.todoForm.status === 'VALID') {
      if (this.isEditMode) {
        const editedData = await this.editExistingObject();
        this.todoListService.generateEditTodoData(editedData);
      } else {
        const newObject = await this.newObjectCreation();
        this.todoListService.generatePostTodoData(newObject);
      }
    }
    this.todoForm.reset();
  }

  async editExistingObject() {
    return {
      ...this.currentSelectFormData,
      todoTitle: this.todoForm.value.todoTitle,
      todoDescription: this.todoForm.value.todoDescription,
      lastEditedDate: this.globalModuleServiceInstance.getCurrentDate(),
    };
  }

  async newObjectCreation() {
    let currentId = this.todoListService.getCurrentListDataLength() + 1;

    return {
      id: currentId.toString(),
      todoTitle: this.todoForm.value.todoTitle,
      todoDescription: this.todoForm.value.todoDescription,
      createdDate: this.globalModuleServiceInstance.getCurrentDate(),
      lastEditedDate: this.globalModuleServiceInstance.getCurrentDate(),
    };
  }
}

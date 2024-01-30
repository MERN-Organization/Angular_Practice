import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AllModuleLoadService } from '../../../../../Global App Services/all-module-load.service';
import { Observable, map } from 'rxjs';
import { TodoListService } from '../../../services/todo-list.service';

@Component({
  selector: 'app-crud-todo-list',
  templateUrl: './crud-todo-list.component.html',
  styleUrl: './crud-todo-list.component.css',
})
export class CrudTodoListComponent implements OnInit {
  constructor(
    private globalModuleLoadService: AllModuleLoadService,
    private todoListServiceInstace: TodoListService
  ) {}

  @Output() sendDataToForm = new EventEmitter();

  currentModuleData$: Observable<any> | undefined;

  ngOnInit(): void {
    if (
      Object.keys(this.globalModuleLoadService.getCurrentModuleData())
        .length !== 0
    ) {
      this.currentModuleData$ =
        this.globalModuleLoadService.currentModuleData$.pipe(
          map((currentModuleData: any) => {
            if (currentModuleData && currentModuleData.formsData) {
              const filteredFormsData = currentModuleData.formsData.filter(
                (formData: any) => formData.isCompleted === false
              );
              return { ...currentModuleData, formsData: filteredFormsData };
            } else {
              return currentModuleData;
            }
          })
        );
    } else {
      // this.todoListServiceInstace.
    }
  }

  editItem(item: any) {
    this.sendDataToForm.emit(item);
  }

  deleteItem(item: any) {
    this.todoListServiceInstace.generateDeleteTodoData(item.id);
  }

  completeItem(item: any) {
    this.todoListServiceInstace.generateCompleteTodoData(item.id);
  }
}

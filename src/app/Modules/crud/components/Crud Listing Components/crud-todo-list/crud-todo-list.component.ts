import { Component, OnInit } from '@angular/core';
import { AllModuleLoadService } from '../../../../../Global App Services/all-module-load.service';

@Component({
  selector: 'app-crud-todo-list',
  templateUrl: './crud-todo-list.component.html',
  styleUrl: './crud-todo-list.component.css',
})
export class CrudTodoListComponent implements OnInit {
  currentModuleData: any;

  constructor(private globalModuleLoadService: AllModuleLoadService) {}

  ngOnInit(): void {
    this.currentModuleData = this.globalModuleLoadService.getCurrentModuleData();
  }
}

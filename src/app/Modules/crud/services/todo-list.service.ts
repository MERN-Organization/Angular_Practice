import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AllModuleLoadService } from '../../../Global App Services/all-module-load.service';
import { BackendConnectionUrls } from '../../../../constants/appUrls';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  constructor(
    private http: HttpClient,
    private globalModuleService: AllModuleLoadService
  ) {}
  getCurrentListDataLength() {
    const currentModuleData = this.globalModuleService.getCurrentModuleData();
    if (currentModuleData?.formsData?.length) {
      return currentModuleData.formsData.length;
    } else {
      return 0;
    }
  }

  generateEditTodoData(formData: any) {
    const currentModuleData = this.globalModuleService.getCurrentModuleData();
    const newEditedData = currentModuleData?.formsData.map((iter: any) => {
      if (iter.id === formData.id) {
        return {
          ...iter,
          ...formData,
        };
      }
      return iter;
    });
    currentModuleData.formsData = newEditedData;
    this.postTodoData(currentModuleData);
  }

  generatePostTodoData(formData: any) {
    const currentModuleData = this.globalModuleService.getCurrentModuleData();
    const deepCloneCurrentModuleData = JSON.parse(
      JSON.stringify(currentModuleData)
    );
    const newFormsData = [
      ...(deepCloneCurrentModuleData?.formsData || []),
      formData,
    ];
    deepCloneCurrentModuleData.formsData = newFormsData;
    this.postTodoData(deepCloneCurrentModuleData);
  }

  postTodoData(formData: any) {
    this.http
      .put(
        `${BackendConnectionUrls.baseUrl}/${
          BackendConnectionUrls.modules
        }/${this.globalModuleService.getCurrentModuleId()}`,
        formData
      )
      .subscribe({
        next: (response) => {
          this.globalModuleService.setCurrentModuleData(response);
        },
        error: (error: Error) => {
          console.error('Error Generated While Getting Modules Data', error);
        },
        complete: () => {
          console.info('Current modules Data Updated');
        },
      });
  }

  generateDeleteTodoData(toBeDeletedItem: any) {
    const currentModuleData = this.globalModuleService.getCurrentModuleData();
    const updatedFormsData = currentModuleData.formsData.filter(
      (iter: any) => iter.id !== toBeDeletedItem
    );
    currentModuleData.formsData = updatedFormsData;
    this.deleteTodoData(currentModuleData);
  }

  deleteTodoData(formData: any) {
    this.http
      .put(
        `${BackendConnectionUrls.baseUrl}/${
          BackendConnectionUrls.modules
        }/${this.globalModuleService.getCurrentModuleId()}`,
        formData
      )
      .subscribe({
        next: (response) => {
          this.globalModuleService.setCurrentModuleData(response);
        },
        error: (error: Error) => {
          console.error('Error Generated While Getting Modules Data', error);
        },
        complete: () => {
          console.info('Current modules Data Updated');
        },
      });
  }
}

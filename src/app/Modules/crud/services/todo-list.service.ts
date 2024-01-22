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
    return currentModuleData.formsData.length;
  }

  generatePostTodoData(formData: any) {
    const currentModuleData = this.globalModuleService.getCurrentModuleData();
    const deepCloneCurrentModuleData = JSON.parse(
      JSON.stringify(currentModuleData)
    );
    const newFormsData = [...deepCloneCurrentModuleData.formsData, formData];
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
}

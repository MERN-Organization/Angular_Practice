import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BackendConnectionUrls } from '../../constants/appUrls';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AllModuleLoadService {
  constructor(private http: HttpClient) {}
  public currentModuleData$: any = new BehaviorSubject([]);

  getAllModules(): Observable<any[]> {
    return this.http.get<any[]>(
      `${BackendConnectionUrls.baseUrl}/${BackendConnectionUrls.modules}`
    );
  }

  getAndStoreCurrentModule(moduleId: any): void {
    this.http
      .get<any>(
        `${BackendConnectionUrls.baseUrl}/${BackendConnectionUrls.modules}/${moduleId}`
      )
      .subscribe({
        next: (response) => {
          this.currentModuleData$.next(response);
        },
        error: (error: Error) => {
          console.error('Error Generated While Getting Modules Data', error);
        },
        complete: () => {
          console.info('Current modules Data Loaded');
        },
      });
  }

  setCurrentModuleData(updatedData: any) {
    this.currentModuleData$.next(updatedData);
  }

  getCurrentModuleData() {
    return this.currentModuleData$.getValue();
  }

  getCurrentModuleId() {
    return this.currentModuleData$.getValue().id;
  }

  getCurrentDate() {
    const date = new Date();
    return date.getDate() + '/' + date.getMonth()+1 + '/' + date.getFullYear();
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BackendConnectionUrls } from '../../constants/appUrls';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AllModuleLoadService {
  constructor(private http: HttpClient) {}
  currentModuleData: any;

  getAllModules(): Observable<any[]> {
    return this.http.get<any[]>(
      `${BackendConnectionUrls.baseUrl}/${BackendConnectionUrls.modules}`
    );
  }

  getAndStoreCurrenModule(moduleId: any): void {
    this.http
      .get<any>(
        `${BackendConnectionUrls.baseUrl}/${BackendConnectionUrls.modules}/${moduleId}`
      )
      .subscribe({
        next: (response) => {
          this.currentModuleData = response;
        },
        error: (error: Error) => {
          console.error('Error Generated While Getting Modules Data', error);
        },
        complete: () => {
          console.info('Current modules Data Loaded');
        },
      });
  }

  getCurrentModuleData() {
    return this.currentModuleData;
  }
}

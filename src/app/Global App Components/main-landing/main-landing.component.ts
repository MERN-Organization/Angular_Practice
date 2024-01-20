import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BackendConnectionUrls } from '../../../constants/appUrls';
import { AllModuleLoadService } from '../../Global App Services/all-module-load.service';

@Component({
  selector: 'app-main-landing',
  templateUrl: './main-landing.component.html',
  styleUrl: './main-landing.component.css',
})
export class MainLandingComponent implements OnInit {
  public modulesData: any[] | undefined;
  constructor(private allModuleService: AllModuleLoadService) {}

  ngOnInit(): void {
    this.funcGetAllModules();
  }

  funcGetAllModules() {
    this.allModuleService.getAllModules().subscribe({
      next: (data: any) => {
        this.modulesData = data;
      },
      error: (error: Error) => {
        console.error('This is error', error);
      },
      complete: () => {
        console.info('Get All modules Completed');
      },
    });
  }
}

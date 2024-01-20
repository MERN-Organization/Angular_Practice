import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { CrudLandingComponent } from './components/crud-landing/crud-landing.component';
import { CrudHeaderComponent } from './components/crud-header/crud-header.component';
import { CrudFooterComponent } from './components/crud-footer/crud-footer.component';
import { CrudSidebarComponent } from './components/crud-sidebar/crud-sidebar.component';
import { CrudAboutComponent } from './components/crud-about/crud-about.component';
import { CrudLayoutComponent } from './components/crud-layout/crud-layout.component';
import { CrudTodoFormComponent } from './components/Crud Form Components/crud-todo-form/crud-todo-form.component';
import { CrudEmployeeFormComponent } from './components/Crud Form Components/crud-employee-form/crud-employee-form.component';
import { CrudEmployeeListComponent } from './components/Crud Listing Components/crud-employee-list/crud-employee-list.component';
import { CrudTodoListComponent } from './components/Crud Listing Components/crud-todo-list/crud-todo-list.component';
import { CrudTodoLandingComponent } from './components/Crud Landing Components/crud-todo-landing/crud-todo-landing.component';
import { CrudEmployeeLandingComponent } from './components/Crud Landing Components/crud-employee-landing/crud-employee-landing.component';


@NgModule({
  declarations: [
    CrudLandingComponent,
    CrudHeaderComponent,
    CrudFooterComponent,
    CrudSidebarComponent,
    CrudAboutComponent,
    CrudLayoutComponent,
    CrudTodoFormComponent,
    CrudEmployeeFormComponent,
    CrudEmployeeListComponent,
    CrudTodoListComponent,
    CrudTodoLandingComponent,
    CrudEmployeeLandingComponent,
  ],
  imports: [
    CommonModule,
    CrudRoutingModule
  ]
})
export class CrudModule { }

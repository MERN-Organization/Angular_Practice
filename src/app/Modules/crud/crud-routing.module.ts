import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudLandingComponent } from './components/crud-landing/crud-landing.component';
import { CrudAboutComponent } from './components/crud-about/crud-about.component';
import { CrudTodoLandingComponent } from './components/Crud Landing Components/crud-todo-landing/crud-todo-landing.component';
import { CrudEmployeeLandingComponent } from './components/Crud Landing Components/crud-employee-landing/crud-employee-landing.component';

const routes: Routes = [
  {
    path: '',
    component: CrudLandingComponent,
    children: [
      {
        path: '',
        component: CrudAboutComponent,
      },
      {
        path: 'todo',
        component: CrudTodoLandingComponent,
      },
      {
        path: 'employee',
        component: CrudEmployeeLandingComponent,
      },
      {
        path: 'about',
        component: CrudAboutComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudRoutingModule {}

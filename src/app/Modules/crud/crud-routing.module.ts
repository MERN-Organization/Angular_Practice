import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudLandingComponent } from './components/crud-landing/crud-landing.component';
import { CrudAboutComponent } from './components/crud-about/crud-about.component';

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

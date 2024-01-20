import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudLandingComponent } from './components/crud-landing/crud-landing.component';

const routes: Routes = [
  {
    path: '',
    component: CrudLandingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudRoutingModule {}

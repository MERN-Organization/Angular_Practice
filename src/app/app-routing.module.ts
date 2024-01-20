import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IoModule } from './Modules/io/io.module';
import { CrudModule } from './Modules/crud/crud.module';
import { MainLandingComponent } from './Global App Components/main-landing/main-landing.component';

const routes: Routes = [
  {
    path: '',
    component: MainLandingComponent,
  },
  {
    path: 'io',
    loadChildren: () => IoModule,
  },
  {
    path: 'crud',
    loadChildren: () => CrudModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

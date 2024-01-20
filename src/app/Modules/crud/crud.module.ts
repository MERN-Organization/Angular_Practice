import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { CrudLandingComponent } from './components/crud-landing/crud-landing.component';


@NgModule({
  declarations: [
    CrudLandingComponent
  ],
  imports: [
    CommonModule,
    CrudRoutingModule
  ]
})
export class CrudModule { }

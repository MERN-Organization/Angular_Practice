import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IoRoutingModule } from './io-routing.module';
import { IoLandingComponent } from './components/io-landing/io-landing.component';


@NgModule({
  declarations: [
    IoLandingComponent
  ],
  imports: [
    CommonModule,
    IoRoutingModule
  ],
})
export class IoModule { }

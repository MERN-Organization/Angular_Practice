import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { CrudLandingComponent } from './components/crud-landing/crud-landing.component';
import { CrudHeaderComponent } from './components/crud-header/crud-header.component';
import { CrudFooterComponent } from './components/crud-footer/crud-footer.component';
import { CrudSidebarComponent } from './components/crud-sidebar/crud-sidebar.component';
import { CrudListingComponent } from './components/crud-listing/crud-listing.component';
import { CrudAboutComponent } from './components/crud-about/crud-about.component';
import { CrudLayoutComponent } from './components/crud-layout/crud-layout.component';


@NgModule({
  declarations: [
    CrudLandingComponent,
    CrudHeaderComponent,
    CrudFooterComponent,
    CrudSidebarComponent,
    CrudListingComponent,
    CrudAboutComponent,
    CrudLayoutComponent
  ],
  imports: [
    CommonModule,
    CrudRoutingModule
  ]
})
export class CrudModule { }

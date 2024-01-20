import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainLandingComponent } from './Global App Components/main-landing/main-landing.component';
import { HttpClientModule } from '@angular/common/http';
import { IoLandingComponent } from './Modules/io/components/io-landing/io-landing.component';

@NgModule({
  declarations: [AppComponent, MainLandingComponent],
  imports: [BrowserModule, NgbModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

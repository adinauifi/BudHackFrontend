import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CereriComponent } from './components/cereri/cereri.component';
import { TaxeImpoziteComponent } from './components/taxe-impozite/taxe-impozite.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CTPComponent } from './components/ctp/ctp.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    CereriComponent,
    TaxeImpoziteComponent,
    HomePageComponent,
    CTPComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

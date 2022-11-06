import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CereriComponent } from './components/cereri/cereri.component';
import { TaxeImpoziteComponent } from './components/taxe-impozite/taxe-impozite.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CTPComponent } from './components/ctp/ctp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CerereDetailsComponent } from './components/cereri/cerere-details/cerere-details.component';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    CereriComponent,
    TaxeImpoziteComponent,
    HomePageComponent,
    CTPComponent,
    CerereDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatExpansionModule,
    MatSelectModule,
    MatCheckboxModule,
    MatCardModule, 
    MatFormFieldModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

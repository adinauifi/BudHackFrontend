import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CereriComponent } from './components/cereri/cereri.component';
import { CTPComponent } from './components/ctp/ctp.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TaxeImpoziteComponent } from './components/taxe-impozite/taxe-impozite.component';

const routes: Routes = [
    { path: 'HomePage', component: HomePageComponent },
    { path: 'Cereri', component: CereriComponent },
    { path: 'TaxeSiImpozite', component: TaxeImpoziteComponent },
    { path: 'Profile', component: ProfileComponent },
    { path: 'CTP', component: CTPComponent },
    { path: '**', component: HomePageComponent },  // Wildcard route for a 404 page
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

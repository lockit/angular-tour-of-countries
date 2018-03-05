import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CountriesComponent } from './countries/countries.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'countries', component: CountriesComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: CountryDetailComponent}
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }

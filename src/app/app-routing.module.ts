import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CountriesComponent } from 'app/countries/countries.component'

const routes: Routes = [
  { path: 'countries', component: CountriesComponent }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }

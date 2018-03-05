import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CapitalizePipe } from './pipes/capitalize.pipe'

import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';


@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    CountriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

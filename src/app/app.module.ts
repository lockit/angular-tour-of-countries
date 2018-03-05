import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CapitalizePipe } from './pipes/capitalize.pipe'
import { CountryService } from './services/country.service'
import { MessageService } from './services/message.service'


import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LanguageService } from './services/languages.service';


@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    CountriesComponent,
    CountryDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    CountryService,
    MessageService,
    LanguageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

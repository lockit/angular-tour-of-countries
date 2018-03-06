import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'


import { CapitalizePipe } from './pipes/capitalize.pipe'
import { TranslateCountryNamePipe } from './pipes/translate.pipe'
import { KeysPipe } from './pipes/keys.pipe'
import { CountryService } from './services/country.service'
import { MessageService } from './services/message.service'
import { LanguageService } from './services/language.service'

import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    CountryDetailComponent,
    MessagesComponent,
    DashboardComponent,
    CapitalizePipe,
    TranslateCountryNamePipe,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    Angular2FontawesomeModule,
    HttpClientModule
  ],
  providers: [
    CountryService,
    MessageService,
    LanguageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

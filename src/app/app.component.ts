import { Component } from '@angular/core';
import { Location } from '@angular/common';

import { LanguageService } from 'app/services/language.service'

import * as myGlobals from 'app/globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedLanguage: string = myGlobals.defaultLanguage;
  languages: Object[] = myGlobals.languages;
  title = 'Tour of countries';

  constructor(private languageService: LanguageService,
              private location: Location){}

  changeLanguage(item): void {
    this.languageService.setLanguage(item);
    this.languageService.triggerLanguage++;
  }
}

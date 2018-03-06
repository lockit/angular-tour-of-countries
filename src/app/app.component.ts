import { Component } from '@angular/core';
import { Location } from '@angular/common';

import { LanguageService } from 'app/services/language.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedLanguage: string;
  languages: Array<{id:string, name: string}>;
  title = 'Tour of countries';

  constructor(private languageService: LanguageService,
              private location: Location){
    this.selectedLanguage = languageService.language;
    this.languages = languageService.languages();
  }
}

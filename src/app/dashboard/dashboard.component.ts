import { Component, OnInit } from '@angular/core';

import { CountryService } from '../services/country.service';
import { Country } from '../models/country';
import { Language } from '../models/language'
import { LanguageService } from '../services/languages.service';
import { language, LANGUAGES } from '../global';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  countries: Country[];
  

  constructor(private countryService: CountryService,
              private languageService: LanguageService) { 
              }

  ngOnInit() {
    this.getCountries();
  }

  getCountries(): void{
    this.countryService.getCountries().subscribe(countries => this.countries = countries.slice(1, 5));
  }


}

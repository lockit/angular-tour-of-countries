import { Component, OnInit } from '@angular/core';

import { CountryService } from 'app/services/country.service'
import { Country } from 'app/models/country'
import { LanguageService } from 'app/services/language.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  countries: Country[];

  constructor(private countryService: CountryService,
              private languageService: LanguageService) { }

  ngOnInit() {
    this.getCountries();
  }

  getCountries(): void{
    this.countryService.getCountries()
      .subscribe(countries => this.countries = countries.slice(1,5));
  }


}

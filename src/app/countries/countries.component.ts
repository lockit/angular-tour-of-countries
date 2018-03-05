import { Component, OnInit } from '@angular/core';

import { Country } from '../models/country';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  selectedCountry: Country;
  countries: Country[];

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.getCountries();
  }

  onSelect(country: Country): void{
    this.selectedCountry = country;
  }

  getCountries(): void{
    this.countryService.getCountries()
      .subscribe(countries => this.countries = countries);
  }

}

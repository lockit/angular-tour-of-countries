import { Component, OnInit } from '@angular/core';

import { Country } from 'app/models/country'
import { COUNTRIES } from 'app/mocks/mock-countries'

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  selectedCountry: Country;
  countries: Country[] = COUNTRIES;

  constructor() { }

  ngOnInit() {
  }

  onSelect(country: Country): void{
    this.selectedCountry = country;
  }

}

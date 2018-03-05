import { Component, OnInit } from '@angular/core';

import { Country} from '../models/country';
import { COUNTRIES } from '../mocks/mock-countries';

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

  onSelect(country: Country): void {
    this.selectedCountry = country;
  }

}

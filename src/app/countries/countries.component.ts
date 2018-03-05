import { Component, OnInit } from '@angular/core';

<<<<<<< HEAD
import { Country} from '../models/country';
import { COUNTRIES } from '../mocks/mock-countries';
=======
import { Country } from 'app/models/country'
import { COUNTRIES } from 'app/mocks/mock-countries'
>>>>>>> 5b80b708bf86245c977e7cd248d2d048958b611e

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
<<<<<<< HEAD
    selectedCountry: Country;
    countries: Country[] = COUNTRIES;
=======
  selectedCountry: Country;
  countries: Country[] = COUNTRIES;
>>>>>>> 5b80b708bf86245c977e7cd248d2d048958b611e

  constructor() { }

  ngOnInit() {
  }

<<<<<<< HEAD
  onSelect(country: Country): void {
=======
  onSelect(country: Country): void{
>>>>>>> 5b80b708bf86245c977e7cd248d2d048958b611e
    this.selectedCountry = country;
  }

}

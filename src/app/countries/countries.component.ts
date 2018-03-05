import { Component, OnInit } from '@angular/core';

import { Country } from 'app/models/country'

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  country: Country = {
    id: 'ad',
    name: 'aNdoRra',
    population: 78014,
    flag: 'https://restcountries.eu/data/and.svg',
    translations: {
      "de":"Andorra",
      "es":"Andorra",
      "fr":"Andorre",
      "ja":"アンドラ",
      "it":"Andorra",
      "br":"Andorra",
      "pt":"Andorra",
      "nl":"Andorra",
      "hr":"Andora",
      "fa":"آندورا"
    }
  };

  constructor() { }

  ngOnInit() {
  }

}

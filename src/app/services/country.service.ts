import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of'

import { Country } from 'app/models/country'
import { COUNTRIES } from 'app/mocks/mock-countries'

import { MessageService } from 'app/services/message.service'

@Injectable()
export class CountryService {
  _favourites: Country[] = [];

  constructor(private messageService: MessageService) { }

  getCountries(): Observable<Country[]>{
    this.messageService.add('CountryService: fetch countries');
    return of(COUNTRIES);
  }

  getCountry(id: string): Observable<Country> {
    this.messageService.add(`CountryService: fetch country id=${id}`);
    return of(COUNTRIES.find(country => country.alpha2Code === id));
  }

  toggleFavourite(country: Country) {
    if(!this.isFavourite(country)){
      this.messageService.add(`CountryService: ${country.name} added to favourites!`);
      this._favourites.push(country);
    }else{
      this.messageService.add(`CountryService: ${country.name} removed from favourites!`);
      const index: number = this._favourites.indexOf(this.getFavourite(country));
      this._favourites.splice(index, 1);
    }
  }

  isFavourite(country: Country){
    return this.getFavourite(country) != null;
  }

  getFavourite(country: Country){
    return this._favourites.find(_country => _country.alpha2Code === country.alpha2Code);
  }

  getFavourites(): Country[] {
    return this._favourites;
  }

}

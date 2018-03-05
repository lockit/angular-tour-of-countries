import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of'

import { Country } from 'app/models/country'
import { COUNTRIES } from 'app/mocks/mock-countries'

import { MessageService } from 'app/services/message.service'

@Injectable()
export class CountryService {

  constructor(private messageService: MessageService) { }

  getCountries(): Observable<Country[]>{
    this.messageService.add('CountryService: fetch countries');
    return of(COUNTRIES);
  }

  getCountry(id: string): Observable<Country> {
    this.messageService.add(`CountryService: fetch country id=${id}`);
    return of(COUNTRIES.find(country => country.alpha2Code === id));
  }

}

import { Pipe, PipeTransform } from '@angular/core';

import { Country } from 'app/models/country';

@Pipe({name: 'translateCountryName'})
export class TranslateCountryNamePipe implements PipeTransform {
  constructor(){}

  transform(value: Country, language: string): string {
    if (!value) return '';
    if (language == 'en') return value.name;
    return value.translations[language];
  }
}

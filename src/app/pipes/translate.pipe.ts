import { Pipe, PipeTransform } from '@angular/core';

import { Country } from 'app/models/country';
import { LanguageService } from 'app/services/language.service'

@Pipe({name: 'translate'})
export class TranslatePipe implements PipeTransform {
  constructor(private languageService: LanguageService){}

  transform(value: Country): string {
    if (!value) return '';
    if (this.languageService.language == 'en') return value.name;
    return value.translations[this.languageService.language];
  }
}

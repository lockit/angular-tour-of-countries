import { Injectable } from '@angular/core';

import { MessageService } from 'app/services/message.service'

export const defaultLanguage='it';

export const LANGUAGES: Array<{id:string, name: string}> = [
  { id: 'it', name: 'Italiano' },
  { id: 'de', name: 'Deutsch' },
  { id: 'en', name: 'English' },
  { id: 'es', name: 'Español' },
  { id: 'fr', name: 'Français' },
  { id: 'hr', name: 'Hrvatski jezik' },
  { id: 'nl', name: 'Nederlands' },
  { id: 'br', name: 'Português BR' },
  { id: 'pt', name: 'Português PT' },
  { id: 'fa', name: 'فارسی' },
  { id: 'ja', name: '日本語 (にほんご)' }
];


@Injectable()
export class LanguageService {
  private _language: string = defaultLanguage;

  constructor(private messageService: MessageService) { }

  get language() {
    return this._language;
  }

  set language(language: string){
    this.messageService.add(`LanguageService: set ${language}`);
    this._language = language;
  }

  languages(): Array<{id:string, name: string}> {
    return LANGUAGES;
  }

}

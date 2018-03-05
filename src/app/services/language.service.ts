import { Injectable } from '@angular/core';

import * as myGlobals from 'app/globals';

import { MessageService } from 'app/services/message.service'

@Injectable()
export class LanguageService {
  language: string = myGlobals.defaultLanguage;
  triggerLanguage: number = 0;

  constructor(private messageService: MessageService) { }

  setLanguage(language: string){
    this.messageService.add(`LanguageService: set ${language}`);
    this.language = language;
  }

}

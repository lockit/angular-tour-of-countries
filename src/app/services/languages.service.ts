import { Injectable } from '@angular/core';

import * as myGlobals from 'globals';

@Injectable()

export class LanguageService {
    language: string = myGlobals.defaultLanguage;

    constructor(){}
        
    setLanguage(language:string) {
            
        this.language = language;
        
    }
    
}
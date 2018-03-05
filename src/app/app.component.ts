import { Component } from '@angular/core';

import * as myGlobals from "./global"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of countries';
  languages = myGlobals.LANGUAGES;
}

# ng-localization

[فارسی](README.FA.MD)

## Installation


To install this library, run:

```bash
$ npm install ng2-localization --save
```

## How to use:

#####Setp1:
create typescript file for all your language's

lang-en.ts
```typescript
export const LANG_EN_TRANS = {
  'hello': 'hello {0}',
  'start': '!start it!'
};
```
lang-fa.ts
```typescript
export const LANG_FA_TRANS = {
  'hello': ' {0} سلام ',
  'start': 'شروعش کن'
};
```

#####Setp2:
import this library to your your app main module like below example.
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {TranslationModule, DICTIONARY, LOCAL_CODES, LocalModule} from 'ng2-localization'; // main import

import { AppComponent } from './app.component';
import {  LANG_EN_TRANS } from './lang-en';
import {  LANG_FA_TRANS } from './lang-fa';
// create dictionary for all your language's
const dictionary = {
  [LOCAL_CODES.LANG_ENGLISH_CODE]: LANG_EN_TRANS,
  [LOCAL_CODES.LANG_PERSIAN_CODE]: LANG_FA_TRANS
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TranslationModule.forRoot(),// import of translation module
    LocalModule.forRoot()// import of local module
  ],
  providers: [{provide: DICTIONARY , useValue: dictionary} // provide your created dictionray to library
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

#####Setp3:
In your component class or html template add localService or translationService and use them like below example:

class code:
```typescript
import {Component, OnInit} from '@angular/core';
import {TranslateService, LocalService} from 'ng2-localization';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  langulages: string[];
  selectedLang = 'fa';
  user: 'ali';
  isRtl;

  constructor(private ts: TranslateService, private localService: LocalService) {
    this.user = 'ali';
  }

  ngOnInit(): void {
    this.ts.use(this.selectedLang);
    this.langulages = this.ts.getSupportedLocal();
    this.title = this.ts.instant('hello world');
  }
  setLang() {
    this.ts.use(this.selectedLang); //select language of your's
    this.ts.onLocalChanged.subscribe((local) => {
      this.isRtl = this.localService.isRtl(local);
    });
    this.title = this.ts.instant('hello world', this.user);
  }
  }
```
html template:
```html
<h1>
  {{title}}
  select lang:
  <select [(ngModel)]="selectedLang" (change)="setLang()">
    <option *ngFor="let lang of langulages" [ngValue]="lang">{{lang}}</option>
  </select>

  translate with pipe:

  {{'hello'|translate:[user]}}

  {{'is rtl? :'+isRtl}}

</h1>

```

## Contribute:

If you have issue or if you want to make this library better? you are welcome.

## License

MIT © [@ayalma](mailto:alimohammadi7117@gmail.com)

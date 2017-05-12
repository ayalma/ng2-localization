import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateService} from './translate/translate.service';
import {TranslatePipe} from './translate/translate.pipe';
import {LocalService} from './local/local-service';

export * from './translate/translation';
export * from './translate/translate.service';
export * from './translate/translate.pipe';
export {LOCAL_CODES} from './local/locals';
export {LocalService} from './local/local-service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TranslatePipe],
  exports: [TranslatePipe]
})
export class TranslationModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule : TranslationModule,
      providers : [TranslateService]
    };
  }
}

@NgModule({
  imports: [
    CommonModule
  ]
})
export class LocalModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LocalModule,
      providers: [LocalService]
    };
  }
}

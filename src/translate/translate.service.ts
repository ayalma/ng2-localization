import {EventEmitter, Inject, Injectable} from '@angular/core';
import {DICTIONARY} from './translation';
/**
 * Created by ali on 5/11/17.
 */
@Injectable()
export class TranslateService {

    private _defaultLocal: string;
    private _currentLocal: string;
    private _fallback: boolean;
    public onLocalChanged: EventEmitter<string> = new EventEmitter<string>();
    private PLACEHOLDER = '%';

    constructor(@Inject(DICTIONARY) private _translations: any) {
    }
    public getCurrentLocal(): string {
        return this._currentLocal || this._defaultLocal;
    }
    public getSupportedLocal(): string[] {
        return Object.keys(this._translations);
    }

    public setDefaultLocal(local: string) {
        this._defaultLocal = local; // set default Local
    }

    public enableFallback(enable: boolean) {
        this._fallback = enable; // enable or disable fallback Local
    }
    public use(local: string): void {
        // set current language
        this._currentLocal = local;
        this.onLocalChanged.emit(local); // publish language change.
    }
    private translate(key: string): string {

        // private perform translation
        let translation = key;

        if (this._translations[this._currentLocal] && this._translations[this._currentLocal][key]) {
            return   translation = this._translations[this._currentLocal][key]; // if found in currentLocal
        }

        // fallback disabled
        if (!this._fallback) {return translation; }

        // found in default language
        if (this._translations[this._defaultLocal] && this._translations[this._defaultLocal][this._translations[key]]) {
            return this._translations[this._defaultLocal][this._translations[key]];
        }

        return translation;
    }
    public instant(key: string, words?: string|string[]) {
        // call translation
        let translation = this.translate(key);
        if (!words) {return translation; }
        return this.replace(translation, words);
    }
    private replace(word = '' , words: string|string[] = '') {
        let translation = word;
        const values: string[] = [].concat(words);
        values.forEach((e, i) => {
            translation = translation.replace('{'.concat(i.toString()).concat('}'), e);
        });
        return translation;
    }
}

import {Pipe, PipeTransform} from '@angular/core';
import {TranslateService} from './translate.service';
/**
 * Created by ali on 5/11/17.
 */

@Pipe({
    name: 'translate',
    pure: false // add in this line, update value when we change language
})
export class TranslatePipe implements PipeTransform {

    constructor(private _translate: TranslateService) {
    }

    transform(value: any, args: string | string[]): any {
        if (!value) {return;}
        return this._translate.instant(value, args);
    }

}

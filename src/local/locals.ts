/**
 * Created by ali on 5/12/17.
 */
export interface Local {
    code: string;
    englishName: string;
    localName: string;
}
export const Locals = {
    'en' : {code: 'en', englishName: 'English', localName: 'English'},
    'fa' : {code: 'fa', englishName: 'Persian', localName: 'فارسی'},
    'ar' : {code: 'ar', englishName: 'Arabic', localName: 'العربیة'},
};

export const LOCAL_CODES = {
    LANG_ENGLISH_CODE: 'en',
    LANG_PERSIAN_CODE: 'fa',
    LANG_ARABIC_CODE: 'ar'
};

export const RtlLocals: string[] = ['ar', 'arc', 'dv', 'fa', 'ha', 'he', 'khw', 'ks', 'ku', 'ps', 'ur', 'yi'];

import {Injectable} from '@angular/core';
import {RtlLocals, Locals, Local} from './locals';
/**
 * Created by ali on 5/12/17.
 */

@Injectable()
export class LocalService {
    isRtl(local: string): boolean {
        return RtlLocals.indexOf(local) > -1;
    }
    /*in opinion this method not needed :D*/
    getLocals() {
        return Locals;
    }
    getLocal(local: string): Local {
        return Locals[local];
    }
}

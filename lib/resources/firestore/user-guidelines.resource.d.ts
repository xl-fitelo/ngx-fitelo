import { AngularFirestore } from '@angular/fire/firestore';
import * as i0 from "@angular/core";
export declare class UserGuidelinesResource {
    private afs;
    constructor(afs: AngularFirestore);
    getGuidelines(uid: string): Promise<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserGuidelinesResource, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UserGuidelinesResource>;
}

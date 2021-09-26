import { AngularFirestore } from "@angular/fire/firestore";
import * as i0 from "@angular/core";
export declare class UsersResource {
    private firestore;
    constructor(firestore: AngularFirestore);
    getUser(uid: string): Promise<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UsersResource, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UsersResource>;
}

import { AngularFirestore } from "@angular/fire/firestore";
import * as i0 from "@angular/core";
export declare class PlansResource {
    private firestore;
    constructor(firestore: AngularFirestore);
    mget(planIds: string[]): Promise<any[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PlansResource, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PlansResource>;
}

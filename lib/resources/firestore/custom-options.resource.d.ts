import { AngularFirestore } from "@angular/fire/firestore";
import * as i0 from "@angular/core";
export declare class CustomOptionsResource {
    private firestore;
    constructor(firestore: AngularFirestore);
    getAllMedicalCondtions(): Promise<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomOptionsResource, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CustomOptionsResource>;
}

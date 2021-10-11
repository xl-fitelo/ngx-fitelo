import { AngularFirestore } from "@angular/fire/firestore";
import * as i0 from "@angular/core";
export declare class CustomOptionsResource {
    private firestore;
    constructor(firestore: AngularFirestore);
    getAllMedicalCondtions(): Promise<CustomOption[]>;
    saveAllMedicalCondtions(medicalConditions: CustomOption[]): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomOptionsResource, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CustomOptionsResource>;
}
export interface CustomOption {
    name: string;
    isHidden: boolean;
}

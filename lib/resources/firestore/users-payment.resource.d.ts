import { AngularFirestore } from "@angular/fire/firestore";
import * as i0 from "@angular/core";
export declare class UsersPaymentResource {
    private firestore;
    constructor(firestore: AngularFirestore);
    doc(uid: string): import("@angular/fire/firestore").AngularFirestoreDocument<unknown>;
    getUserPayment(uid: string): Promise<{
        data: {
            date: string;
            orderId: string;
            paymentId: string;
            planId: string;
        }[];
        uid: string;
    }>;
    updatePayment(uid: any, plan: any, request: any): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UsersPaymentResource, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UsersPaymentResource>;
}

import { AngularFirestore } from "@angular/fire/firestore";
import * as i0 from "@angular/core";
export declare class PushNotificationsResource {
    private firestore;
    constructor(firestore: AngularFirestore);
    getAll(): Promise<PushNotificationDict[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PushNotificationsResource, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PushNotificationsResource>;
}
export interface PushNotificationDict {
    title: string;
    text: string;
    timestamp: Date;
    customData: {
        [key: string]: string;
    };
}

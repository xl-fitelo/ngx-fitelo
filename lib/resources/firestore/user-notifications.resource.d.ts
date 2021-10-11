import { AngularFirestore } from "@angular/fire/firestore";
import * as i0 from "@angular/core";
export declare class UserNotificationsResource {
    private firestore;
    constructor(firestore: AngularFirestore);
    doc(uid: string): import("@angular/fire/firestore").AngularFirestoreDocument<unknown>;
    getUserRemindersDict(uid: string): Promise<RemindersDict | null>;
    getUserReminderDict(uid: string, type: 'weight' | 'water' | 'sleep'): Promise<ReminderDict | null>;
    saveUserReminderDict(uid: string, type: 'weight' | 'water' | 'sleep', reminderDict: ReminderDict): Promise<void>;
    getUserMedicineReminderDict(uid: string, idx: number): Promise<ReminderDict | null>;
    saveUserMedicineReminder(uid: string, idx: number | null, reminderDict: ReminderDict): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserNotificationsResource, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UserNotificationsResource>;
}
export declare type ReminderType = 'weight' | 'water' | 'sleep' | 'medicine';
export interface ReminderDict {
    type: ReminderType;
    freqDict: FreqDict;
    isActive: boolean;
    name?: string;
    idx?: number;
}
export interface RemindersDict {
    weightReminderDict: ReminderDict;
    waterReminderDict: ReminderDict;
    sleepReminderDict: ReminderDict;
    medicineReminderDicts: ReminderDict[];
}
export interface FreqDict {
    type: string;
    value: string[];
}

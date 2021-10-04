import { AngularFirestore } from '@angular/fire/firestore';
import * as i0 from "@angular/core";
export declare class UserDiaryResource {
    private firestore;
    constructor(firestore: AngularFirestore);
    doc(uid: string): import("@angular/fire/firestore").AngularFirestoreDocument<unknown>;
    fetchUserDiaryData(uid: string): Promise<unknown>;
    updateUserDiary(uid: string, userDiaryData: any): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserDiaryResource, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UserDiaryResource>;
}

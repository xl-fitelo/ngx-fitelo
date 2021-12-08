import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/fire/firestore";
export class UserDiaryResource {
    constructor(firestore) {
        this.firestore = firestore;
    }
    doc(uid) {
        return this.firestore.doc(`usersDiary/${uid}`);
    }
    fetchUserDiaryData(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.doc(uid).get().toPromise()).data();
        });
    }
    updateUserDiary(uid, userDiaryData) {
        return this.doc(uid).set(userDiaryData);
    }
}
UserDiaryResource.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: UserDiaryResource, deps: [{ token: i1.AngularFirestore }], target: i0.ɵɵFactoryTarget.Injectable });
UserDiaryResource.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: UserDiaryResource, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: UserDiaryResource, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.AngularFirestore }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1kaWFyeS5yZXNvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1maXRlbG8vc3JjL2xpYi9yZXNvdXJjZXMvZmlyZXN0b3JlL3VzZXItZGlhcnkucmVzb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU0zQyxNQUFNLE9BQU8saUJBQWlCO0lBRTVCLFlBQ1UsU0FBMkI7UUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFDbEMsQ0FBQztJQUVKLEdBQUcsQ0FBQyxHQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVLLGtCQUFrQixDQUFDLEdBQVc7O1lBQ2xDLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN4RCxDQUFDO0tBQUE7SUFFRCxlQUFlLENBQUMsR0FBVyxFQUFFLGFBQWtCO1FBQzdDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7OEdBaEJVLGlCQUFpQjtrSEFBakIsaUJBQWlCLGNBRmhCLE1BQU07MkZBRVAsaUJBQWlCO2tCQUg3QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFuZ3VsYXJGaXJlc3RvcmUgfSBmcm9tICdAYW5ndWxhci9maXJlL2ZpcmVzdG9yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VyRGlhcnlSZXNvdXJjZSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmaXJlc3RvcmU6IEFuZ3VsYXJGaXJlc3RvcmVcbiAgKSB7fVxuXG4gIGRvYyh1aWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmZpcmVzdG9yZS5kb2MoYHVzZXJzRGlhcnkvJHt1aWR9YCk7XG4gIH1cblxuICBhc3luYyBmZXRjaFVzZXJEaWFyeURhdGEodWlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gKGF3YWl0IHRoaXMuZG9jKHVpZCkuZ2V0KCkudG9Qcm9taXNlKCkpLmRhdGEoKTtcbiAgfVxuXG4gIHVwZGF0ZVVzZXJEaWFyeSh1aWQ6IHN0cmluZywgdXNlckRpYXJ5RGF0YTogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMuZG9jKHVpZCkuc2V0KHVzZXJEaWFyeURhdGEpO1xuICB9XG5cbn1cbiJdfQ==
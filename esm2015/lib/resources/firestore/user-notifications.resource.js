import { __awaiter } from "tslib";
import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/fire/firestore";
export class UserNotificationsResource {
    constructor(firestore) {
        this.firestore = firestore;
    }
    doc(uid) {
        return this.firestore.doc(`userNotifications/${uid}`);
    }
    getUserRemindersDict(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            let un = (yield this.doc(uid).get().toPromise()).data();
            if (!un || !un.remindersDict)
                return null;
            return un.remindersDict;
        });
    }
    getUserReminderDict(uid, type) {
        return __awaiter(this, void 0, void 0, function* () {
            let un = (yield this.doc(uid).get().toPromise()).data();
            if (!un || !un.remindersDict)
                return null;
            return type ? un.remindersDict[type + 'ReminderDict'] : un.remindersDict;
        });
    }
    saveUserReminderDict(uid, type, reminderDict) {
        return __awaiter(this, void 0, void 0, function* () {
            let un = (yield this.doc(uid).get().toPromise()).data();
            if (!un)
                un = {};
            if (!un.remindersDict)
                un.remindersDict = {};
            un.remindersDict[type + 'ReminderDict'] = reminderDict;
            return this.doc(uid).set(un);
        });
    }
    getUserMedicineReminderDict(uid, idx) {
        return __awaiter(this, void 0, void 0, function* () {
            let un = (yield this.doc(uid).get().toPromise()).data();
            if (!un || !un.remindersDict)
                return null;
            return un.remindersDict['medicineReminderDicts'][idx];
        });
    }
    saveUserMedicineReminder(uid, idx, reminderDict) {
        return __awaiter(this, void 0, void 0, function* () {
            let un = (yield this.doc(uid).get().toPromise()).data();
            if (!un)
                un = {};
            if (!un.remindersDict)
                un.remindersDict = {};
            if (!un.remindersDict.medicineReminderDicts)
                un.remindersDict.medicineReminderDicts = [];
            if (idx === null)
                un.remindersDict.medicineReminderDicts.push(reminderDict);
            else
                un.remindersDict.medicineReminderDicts[idx] = reminderDict;
            return this.doc(uid).set(un);
        });
    }
}
UserNotificationsResource.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: UserNotificationsResource, deps: [{ token: i1.AngularFirestore }], target: i0.ɵɵFactoryTarget.Injectable });
UserNotificationsResource.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: UserNotificationsResource, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: UserNotificationsResource, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.AngularFirestore }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1ub3RpZmljYXRpb25zLnJlc291cmNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWZpdGVsby9zcmMvbGliL3Jlc291cmNlcy9maXJlc3RvcmUvdXNlci1ub3RpZmljYXRpb25zLnJlc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFNM0MsTUFBTSxPQUFPLHlCQUF5QjtJQUVwQyxZQUNVLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQ2xDLENBQUM7SUFFSixHQUFHLENBQUMsR0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMscUJBQXFCLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVLLG9CQUFvQixDQUFDLEdBQVc7O1lBQ3BDLElBQUksRUFBRSxHQUFRLENBQUMsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUE7WUFDNUQsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhO2dCQUFFLE9BQU8sSUFBSSxDQUFDO1lBQzFDLE9BQU8sRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUMxQixDQUFDO0tBQUE7SUFFSyxtQkFBbUIsQ0FBQyxHQUFXLEVBQUUsSUFBOEI7O1lBQ25FLElBQUksRUFBRSxHQUFRLENBQUMsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUE7WUFDNUQsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhO2dCQUFFLE9BQU8sSUFBSSxDQUFDO1lBQzFDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUMzRSxDQUFDO0tBQUE7SUFFSyxvQkFBb0IsQ0FBQyxHQUFXLEVBQUUsSUFBOEIsRUFBRSxZQUEwQjs7WUFDaEcsSUFBSSxFQUFFLEdBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtZQUM1RCxJQUFJLENBQUMsRUFBRTtnQkFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYTtnQkFBRSxFQUFFLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQTtZQUM1QyxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksR0FBRyxjQUFjLENBQUMsR0FBRyxZQUFZLENBQUM7WUFDdkQsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMvQixDQUFDO0tBQUE7SUFFSywyQkFBMkIsQ0FBQyxHQUFXLEVBQUUsR0FBVzs7WUFDeEQsSUFBSSxFQUFFLEdBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtZQUM1RCxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWE7Z0JBQUUsT0FBTyxJQUFJLENBQUM7WUFDMUMsT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEQsQ0FBQztLQUFBO0lBRUssd0JBQXdCLENBQUMsR0FBVyxFQUFFLEdBQWdCLEVBQUUsWUFBMEI7O1lBQ3RGLElBQUksRUFBRSxHQUFRLENBQUMsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUE7WUFDNUQsSUFBSSxDQUFDLEVBQUU7Z0JBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWE7Z0JBQUUsRUFBRSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUE7WUFDNUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMscUJBQXFCO2dCQUFFLEVBQUUsQ0FBQyxhQUFhLENBQUMscUJBQXFCLEdBQUcsRUFBRSxDQUFDO1lBQ3pGLElBQUksR0FBRyxLQUFLLElBQUk7Z0JBQ2QsRUFBRSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7O2dCQUUxRCxFQUFFLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxHQUFHLFlBQVksQ0FBQztZQUM3RCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9CLENBQUM7S0FBQTs7c0hBOUNVLHlCQUF5QjswSEFBekIseUJBQXlCLGNBRnhCLE1BQU07MkZBRVAseUJBQXlCO2tCQUhyQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQW5ndWxhckZpcmVzdG9yZSB9IGZyb20gXCJAYW5ndWxhci9maXJlL2ZpcmVzdG9yZVwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVXNlck5vdGlmaWNhdGlvbnNSZXNvdXJjZSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmaXJlc3RvcmU6IEFuZ3VsYXJGaXJlc3RvcmUsXG4gICkge31cblxuICBkb2ModWlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5maXJlc3RvcmUuZG9jKGB1c2VyTm90aWZpY2F0aW9ucy8ke3VpZH1gKTtcbiAgfVxuXG4gIGFzeW5jIGdldFVzZXJSZW1pbmRlcnNEaWN0KHVpZDogc3RyaW5nKTogUHJvbWlzZTxSZW1pbmRlcnNEaWN0fG51bGw+IHtcbiAgICBsZXQgdW46IGFueSA9IChhd2FpdCB0aGlzLmRvYyh1aWQpLmdldCgpLnRvUHJvbWlzZSgpKS5kYXRhKClcbiAgICBpZiAoIXVuIHx8ICF1bi5yZW1pbmRlcnNEaWN0KSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gdW4ucmVtaW5kZXJzRGljdDtcbiAgfVxuXG4gIGFzeW5jIGdldFVzZXJSZW1pbmRlckRpY3QodWlkOiBzdHJpbmcsIHR5cGU6ICd3ZWlnaHQnfCd3YXRlcid8J3NsZWVwJyk6IFByb21pc2U8UmVtaW5kZXJEaWN0fG51bGw+IHtcbiAgICBsZXQgdW46IGFueSA9IChhd2FpdCB0aGlzLmRvYyh1aWQpLmdldCgpLnRvUHJvbWlzZSgpKS5kYXRhKClcbiAgICBpZiAoIXVuIHx8ICF1bi5yZW1pbmRlcnNEaWN0KSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gdHlwZSA/IHVuLnJlbWluZGVyc0RpY3RbdHlwZSArICdSZW1pbmRlckRpY3QnXSA6IHVuLnJlbWluZGVyc0RpY3Q7XG4gIH1cblxuICBhc3luYyBzYXZlVXNlclJlbWluZGVyRGljdCh1aWQ6IHN0cmluZywgdHlwZTogJ3dlaWdodCd8J3dhdGVyJ3wnc2xlZXAnLCByZW1pbmRlckRpY3Q6IFJlbWluZGVyRGljdCkge1xuICAgIGxldCB1bjogYW55ID0gKGF3YWl0IHRoaXMuZG9jKHVpZCkuZ2V0KCkudG9Qcm9taXNlKCkpLmRhdGEoKVxuICAgIGlmICghdW4pIHVuID0ge307XG4gICAgaWYgKCF1bi5yZW1pbmRlcnNEaWN0KSB1bi5yZW1pbmRlcnNEaWN0ID0ge31cbiAgICB1bi5yZW1pbmRlcnNEaWN0W3R5cGUgKyAnUmVtaW5kZXJEaWN0J10gPSByZW1pbmRlckRpY3Q7XG4gICAgcmV0dXJuIHRoaXMuZG9jKHVpZCkuc2V0KHVuKTtcbiAgfVxuXG4gIGFzeW5jIGdldFVzZXJNZWRpY2luZVJlbWluZGVyRGljdCh1aWQ6IHN0cmluZywgaWR4OiBudW1iZXIpOiBQcm9taXNlPFJlbWluZGVyRGljdHxudWxsPiB7XG4gICAgbGV0IHVuOiBhbnkgPSAoYXdhaXQgdGhpcy5kb2ModWlkKS5nZXQoKS50b1Byb21pc2UoKSkuZGF0YSgpXG4gICAgaWYgKCF1biB8fCAhdW4ucmVtaW5kZXJzRGljdCkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIHVuLnJlbWluZGVyc0RpY3RbJ21lZGljaW5lUmVtaW5kZXJEaWN0cyddW2lkeF07XG4gIH1cblxuICBhc3luYyBzYXZlVXNlck1lZGljaW5lUmVtaW5kZXIodWlkOiBzdHJpbmcsIGlkeDogbnVtYmVyfG51bGwsIHJlbWluZGVyRGljdDogUmVtaW5kZXJEaWN0KSB7XG4gICAgbGV0IHVuOiBhbnkgPSAoYXdhaXQgdGhpcy5kb2ModWlkKS5nZXQoKS50b1Byb21pc2UoKSkuZGF0YSgpXG4gICAgaWYgKCF1bikgdW4gPSB7fTtcbiAgICBpZiAoIXVuLnJlbWluZGVyc0RpY3QpIHVuLnJlbWluZGVyc0RpY3QgPSB7fVxuICAgIGlmICghdW4ucmVtaW5kZXJzRGljdC5tZWRpY2luZVJlbWluZGVyRGljdHMpIHVuLnJlbWluZGVyc0RpY3QubWVkaWNpbmVSZW1pbmRlckRpY3RzID0gW107XG4gICAgaWYgKGlkeCA9PT0gbnVsbClcbiAgICAgIHVuLnJlbWluZGVyc0RpY3QubWVkaWNpbmVSZW1pbmRlckRpY3RzLnB1c2gocmVtaW5kZXJEaWN0KTtcbiAgICBlbHNlXG4gICAgICB1bi5yZW1pbmRlcnNEaWN0Lm1lZGljaW5lUmVtaW5kZXJEaWN0c1tpZHhdID0gcmVtaW5kZXJEaWN0O1xuICAgIHJldHVybiB0aGlzLmRvYyh1aWQpLnNldCh1bik7XG4gIH1cblxufVxuXG5leHBvcnQgdHlwZSBSZW1pbmRlclR5cGUgPSAnd2VpZ2h0JyB8ICd3YXRlcicgfCAnc2xlZXAnIHwgJ21lZGljaW5lJztcbmV4cG9ydCBpbnRlcmZhY2UgUmVtaW5kZXJEaWN0IHtcbiAgdHlwZTogUmVtaW5kZXJUeXBlLFxuICBmcmVxRGljdDogRnJlcURpY3QsXG4gIGlzQWN0aXZlOiBib29sZWFuLFxuICBuYW1lPzogc3RyaW5nLFxuICBpZHg/OiBudW1iZXIsXG59XG5leHBvcnQgaW50ZXJmYWNlIFJlbWluZGVyc0RpY3Qge1xuICB3ZWlnaHRSZW1pbmRlckRpY3Q6IFJlbWluZGVyRGljdCxcbiAgd2F0ZXJSZW1pbmRlckRpY3Q6IFJlbWluZGVyRGljdCxcbiAgc2xlZXBSZW1pbmRlckRpY3Q6IFJlbWluZGVyRGljdCxcbiAgbWVkaWNpbmVSZW1pbmRlckRpY3RzOiBSZW1pbmRlckRpY3RbXSxcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRnJlcURpY3Qge1xuICB0eXBlOiBzdHJpbmcsXG4gIHZhbHVlOiBzdHJpbmdbXSxcbn1cbiJdfQ==
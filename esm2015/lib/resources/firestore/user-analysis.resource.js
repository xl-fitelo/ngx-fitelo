import { __awaiter } from "tslib";
import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/fire/firestore";
export class UserAnalysisResource {
    constructor(firestore) {
        this.firestore = firestore;
    }
    getUserAnalysis(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            let userAnalysis = null;
            try {
                userAnalysis = (yield this.firestore.doc(`usersanalysis/${uid}`).get().toPromise()).data();
            }
            catch (e) { }
            return userAnalysis;
        });
    }
    getLatestEntry(uid, type) {
        return __awaiter(this, void 0, void 0, function* () {
            const userAnalysis = yield this.getUserAnalysis(uid);
            return this.findLatestEntry(userAnalysis, type);
        });
    }
    findLatestEntry(userAnalysis, type) {
        if (!userAnalysis) {
            if (type == 'measurement')
                return defaultMeasurement;
            if (type == 'sleep')
                return defaultSleep;
            return 0;
        }
        let latestEntry = 0;
        if (type == 'measurement')
            latestEntry = defaultMeasurement;
        if (type == 'sleep')
            latestEntry = defaultSleep;
        Object.keys(userAnalysis.data).sort().forEach((date) => {
            const entry = userAnalysis.data[date];
            if (entry[type])
                latestEntry = entry[type];
        });
        return latestEntry;
    }
    getLatestEntries(uid, type, howMany = 7) {
        return __awaiter(this, void 0, void 0, function* () {
            const userAnalysis = yield this.getUserAnalysis(uid);
            return this.findLatestEntries(userAnalysis, type, howMany);
        });
    }
    findLatestEntries(userAnalysis, type, howMany = 7) {
        if (!userAnalysis || !userAnalysis.data) {
            return [];
        }
        let latestEntries = [];
        Object.keys(userAnalysis.data).sort().forEach((date) => {
            const entry = userAnalysis.data[date];
            if (entry[type])
                latestEntries.push({ date: date, value: entry[type] });
        });
        return latestEntries.sort((a, b) => a.date > b.date ? -1 : 1).slice(0, howMany).sort((a, b) => a.date < b.date ? -1 : 1);
    }
    saveWeightAndMeasurement(uid, date, weight, measurement) {
        return __awaiter(this, void 0, void 0, function* () {
            let newUserAnalysis = {};
            const userAnalysis = yield this.getUserAnalysis(uid);
            if (!userAnalysis) {
                newUserAnalysis = {
                    data: {
                        [date]: {
                            measurement: measurement,
                            weight: weight
                        }
                    },
                    uid: uid,
                };
            }
            else {
                newUserAnalysis = userAnalysis;
                if (!newUserAnalysis.data[date])
                    newUserAnalysis.data[date] = {};
                newUserAnalysis.data[date]['measurement'] = measurement;
                newUserAnalysis.data[date]['weight'] = weight;
            }
            return this.firestore.doc(`usersanalysis/${uid}`).set(newUserAnalysis);
        });
    }
    saveWater(uid, date, water) {
        return __awaiter(this, void 0, void 0, function* () {
            let newUserAnalysis = {};
            const userAnalysis = yield this.getUserAnalysis(uid);
            if (!userAnalysis) {
                newUserAnalysis = {
                    data: {
                        [date]: {
                            water: water
                        }
                    },
                    uid: uid,
                };
            }
            else {
                newUserAnalysis = userAnalysis;
                if (!newUserAnalysis.data[date])
                    newUserAnalysis.data[date] = {};
                newUserAnalysis.data[date]['water'] = water;
            }
            return this.firestore.doc(`usersanalysis/${uid}`).set(newUserAnalysis);
        });
    }
    saveSleep(uid, date, sleep) {
        return __awaiter(this, void 0, void 0, function* () {
            let newUserAnalysis = {};
            const userAnalysis = yield this.getUserAnalysis(uid);
            if (!userAnalysis) {
                newUserAnalysis = {
                    data: {
                        [date]: {
                            sleep: sleep
                        }
                    },
                    uid: uid,
                };
            }
            else {
                newUserAnalysis = userAnalysis;
                if (!newUserAnalysis.data[date])
                    newUserAnalysis.data[date] = {};
                newUserAnalysis.data[date]['sleep'] = sleep;
            }
            return this.firestore.doc(`usersanalysis/${uid}`).set(newUserAnalysis);
        });
    }
}
UserAnalysisResource.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: UserAnalysisResource, deps: [{ token: i1.AngularFirestore }], target: i0.ɵɵFactoryTarget.Injectable });
UserAnalysisResource.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: UserAnalysisResource, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: UserAnalysisResource, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.AngularFirestore }]; } });
export const defaultMeasurement = {
    arm: 0,
    chest: 0,
    hips: 0,
    stomach: 0,
    thigh: 0,
    waist: 0,
};
export const defaultSleep = {
    sleepHrs: 8,
    sleepTime: '22:00',
    wakeupTime: '06:00'
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hbmFseXNpcy5yZXNvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1maXRlbG8vc3JjL2xpYi9yZXNvdXJjZXMvZmlyZXN0b3JlL3VzZXItYW5hbHlzaXMucmVzb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU8zQyxNQUFNLE9BQU8sb0JBQW9CO0lBRS9CLFlBQ1UsU0FBMkI7UUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFDbEMsQ0FBQztJQUVFLGVBQWUsQ0FBQyxHQUFXOztZQUMvQixJQUFJLFlBQVksR0FBUSxJQUFJLENBQUM7WUFDN0IsSUFBSTtnQkFDRixZQUFZLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDNUY7WUFDRCxPQUFNLENBQUMsRUFBRSxHQUFFO1lBQ1gsT0FBTyxZQUFZLENBQUM7UUFDdEIsQ0FBQztLQUFBO0lBRUssY0FBYyxDQUFDLEdBQVcsRUFBRSxJQUFrRDs7WUFDbEYsTUFBTSxZQUFZLEdBQUcsTUFBTSxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JELE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEQsQ0FBQztLQUFBO0lBRUQsZUFBZSxDQUFDLFlBQVksRUFBRSxJQUFrRDtRQUM5RSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ2pCLElBQUksSUFBSSxJQUFJLGFBQWE7Z0JBQUUsT0FBTyxrQkFBa0IsQ0FBQztZQUNyRCxJQUFJLElBQUksSUFBSSxPQUFPO2dCQUFFLE9BQU8sWUFBWSxDQUFDO1lBQ3pD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LENBQUMsTUFBTSxZQUFZLEdBQUc7SUFDMUIsUUFBUSxFQUFFLENBQUM7SUFDWCxTQUFTLEVBQUUsT0FBTztJQUNsQixVQUFVLEVBQUUsT0FBTztDQUNwQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBbmd1bGFyRmlyZXN0b3JlIH0gZnJvbSBcIkBhbmd1bGFyL2ZpcmUvZmlyZXN0b3JlXCI7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VyQW5hbHlzaXNSZXNvdXJjZSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmaXJlc3RvcmU6IEFuZ3VsYXJGaXJlc3RvcmUsXG4gICkge31cblxuICBhc3luYyBnZXRVc2VyQW5hbHlzaXModWlkOiBzdHJpbmcpIHtcbiAgICBsZXQgdXNlckFuYWx5c2lzOiBhbnkgPSBudWxsO1xuICAgIHRyeSB7XG4gICAgICB1c2VyQW5hbHlzaXMgPSAoYXdhaXQgdGhpcy5maXJlc3RvcmUuZG9jKGB1c2Vyc2FuYWx5c2lzLyR7dWlkfWApLmdldCgpLnRvUHJvbWlzZSgpKS5kYXRhKCk7XG4gICAgfVxuICAgIGNhdGNoKGUpIHt9XG4gICAgcmV0dXJuIHVzZXJBbmFseXNpcztcbiAgfVxuXG4gIGFzeW5jIGdldExhdGVzdEVudHJ5KHVpZDogc3RyaW5nLCB0eXBlOiAnd2VpZ2h0JyB8ICdtZWFzdXJlbWVudCcgfCAnd2F0ZXInIHwgJ3NsZWVwJykge1xuICAgIGNvbnN0IHVzZXJBbmFseXNpcyA9IGF3YWl0IHRoaXMuZ2V0VXNlckFuYWx5c2lzKHVpZCk7XG4gICAgcmV0dXJuIHRoaXMuZmluZExhdGVzdEVudHJ5KHVzZXJBbmFseXNpcywgdHlwZSk7XG4gIH1cblxuICBmaW5kTGF0ZXN0RW50cnkodXNlckFuYWx5c2lzLCB0eXBlOiAnd2VpZ2h0JyB8ICdtZWFzdXJlbWVudCcgfCAnd2F0ZXInIHwgJ3NsZWVwJykge1xuICAgIGlmICghdXNlckFuYWx5c2lzKSB7XG4gICAgICBpZiAodHlwZSA9PSAnbWVhc3VyZW1lbnQnKSByZXR1cm4gZGVmYXVsdE1lYXN1cmVtZW50O1xuICAgICAgaWYgKHR5cGUgPT0gJ3NsZWVwJykgcmV0dXJuIGRlZmF1bHRTbGVlcDtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIGxldCBsYXRlc3RFbnRyeTogYW55ID0gMDtcbiAgICBpZiAodHlwZSA9PSAnbWVhc3VyZW1lbnQnKSBsYXRlc3RFbnRyeSA9IGRlZmF1bHRNZWFzdXJlbWVudDtcbiAgICBpZiAodHlwZSA9PSAnc2xlZXAnKSBsYXRlc3RFbnRyeSA9IGRlZmF1bHRTbGVlcDtcblxuICAgIE9iamVjdC5rZXlzKHVzZXJBbmFseXNpcy5kYXRhKS5zb3J0KCkuZm9yRWFjaCgoZGF0ZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBlbnRyeSA9IHVzZXJBbmFseXNpcy5kYXRhW2RhdGVdO1xuICAgICAgaWYgKGVudHJ5W3R5cGVdKSBsYXRlc3RFbnRyeSA9IGVudHJ5W3R5cGVdO1xuICAgIH0pXG4gICAgcmV0dXJuIGxhdGVzdEVudHJ5O1xuICB9XG5cbiAgYXN5bmMgZ2V0TGF0ZXN0RW50cmllcyh1aWQ6IHN0cmluZywgdHlwZTogJ3dlaWdodCcgfCAnbWVhc3VyZW1lbnQnIHwgJ3dhdGVyJyB8ICdzbGVlcCcsIGhvd01hbnkgPSA3KSB7XG4gICAgY29uc3QgdXNlckFuYWx5c2lzID0gYXdhaXQgdGhpcy5nZXRVc2VyQW5hbHlzaXModWlkKTtcbiAgICByZXR1cm4gdGhpcy5maW5kTGF0ZXN0RW50cmllcyh1c2VyQW5hbHlzaXMsIHR5cGUsIGhvd01hbnkpO1xuICB9XG5cbiAgZmluZExhdGVzdEVudHJpZXModXNlckFuYWx5c2lzLCB0eXBlOiAnd2VpZ2h0JyB8ICdtZWFzdXJlbWVudCcgfCAnd2F0ZXInIHwgJ3NsZWVwJywgaG93TWFueSA9IDcpIHtcbiAgICBpZiAoIXVzZXJBbmFseXNpcyB8fCAhdXNlckFuYWx5c2lzLmRhdGEpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBsZXQgbGF0ZXN0RW50cmllczogYW55W10gPSBbXTtcblxuICAgIE9iamVjdC5rZXlzKHVzZXJBbmFseXNpcy5kYXRhKS5zb3J0KCkuZm9yRWFjaCgoZGF0ZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBlbnRyeSA9IHVzZXJBbmFseXNpcy5kYXRhW2RhdGVdO1xuICAgICAgaWYgKGVudHJ5W3R5cGVdKSBsYXRlc3RFbnRyaWVzLnB1c2goe2RhdGU6IGRhdGUsIHZhbHVlOiBlbnRyeVt0eXBlXX0pO1xuICAgIH0pXG5cbiAgICByZXR1cm4gbGF0ZXN0RW50cmllcy5zb3J0KChhLGIpID0+IGEuZGF0ZSA+IGIuZGF0ZSA/IC0xIDogMSkuc2xpY2UoMCxob3dNYW55KS5zb3J0KChhLGIpID0+IGEuZGF0ZSA8IGIuZGF0ZSA/IC0xIDogMSk7XG4gIH1cblxuICBhc3luYyBzYXZlV2VpZ2h0QW5kTWVhc3VyZW1lbnQodWlkLCBkYXRlLCB3ZWlnaHQsIG1lYXN1cmVtZW50KSB7XG4gICAgbGV0IG5ld1VzZXJBbmFseXNpczogYW55ID0ge307XG4gICAgY29uc3QgdXNlckFuYWx5c2lzID0gYXdhaXQgdGhpcy5nZXRVc2VyQW5hbHlzaXModWlkKTtcbiAgICBpZiAoIXVzZXJBbmFseXNpcykge1xuICAgICAgbmV3VXNlckFuYWx5c2lzID0ge1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgW2RhdGVdOiB7XG4gICAgICAgICAgICBtZWFzdXJlbWVudDogbWVhc3VyZW1lbnQsXG4gICAgICAgICAgICB3ZWlnaHQ6IHdlaWdodFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdWlkOiB1aWQsXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbmV3VXNlckFuYWx5c2lzID0gdXNlckFuYWx5c2lzO1xuICAgICAgaWYgKCFuZXdVc2VyQW5hbHlzaXMuZGF0YVtkYXRlXSkgbmV3VXNlckFuYWx5c2lzLmRhdGFbZGF0ZV0gPSB7fTtcbiAgICAgIG5ld1VzZXJBbmFseXNpcy5kYXRhW2RhdGVdWydtZWFzdXJlbWVudCddID0gbWVhc3VyZW1lbnQ7XG4gICAgICBuZXdVc2VyQW5hbHlzaXMuZGF0YVtkYXRlXVsnd2VpZ2h0J10gPSB3ZWlnaHQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmZpcmVzdG9yZS5kb2MoYHVzZXJzYW5hbHlzaXMvJHt1aWR9YCkuc2V0KG5ld1VzZXJBbmFseXNpcyk7XG4gIH1cblxuICBhc3luYyBzYXZlV2F0ZXIodWlkLCBkYXRlLCB3YXRlcikge1xuICAgIGxldCBuZXdVc2VyQW5hbHlzaXM6IGFueSA9IHt9O1xuICAgIGNvbnN0IHVzZXJBbmFseXNpcyA9IGF3YWl0IHRoaXMuZ2V0VXNlckFuYWx5c2lzKHVpZCk7XG4gICAgaWYgKCF1c2VyQW5hbHlzaXMpIHtcbiAgICAgIG5ld1VzZXJBbmFseXNpcyA9IHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIFtkYXRlXToge1xuICAgICAgICAgICAgd2F0ZXI6IHdhdGVyXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB1aWQ6IHVpZCxcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBuZXdVc2VyQW5hbHlzaXMgPSB1c2VyQW5hbHlzaXM7XG4gICAgICBpZiAoIW5ld1VzZXJBbmFseXNpcy5kYXRhW2RhdGVdKSBuZXdVc2VyQW5hbHlzaXMuZGF0YVtkYXRlXSA9IHt9O1xuICAgICAgbmV3VXNlckFuYWx5c2lzLmRhdGFbZGF0ZV1bJ3dhdGVyJ10gPSB3YXRlcjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZmlyZXN0b3JlLmRvYyhgdXNlcnNhbmFseXNpcy8ke3VpZH1gKS5zZXQobmV3VXNlckFuYWx5c2lzKTtcbiAgfVxuXG4gIGFzeW5jIHNhdmVTbGVlcCh1aWQsIGRhdGUsIHNsZWVwKSB7XG4gICAgbGV0IG5ld1VzZXJBbmFseXNpczogYW55ID0ge307XG4gICAgY29uc3QgdXNlckFuYWx5c2lzID0gYXdhaXQgdGhpcy5nZXRVc2VyQW5hbHlzaXModWlkKTtcbiAgICBpZiAoIXVzZXJBbmFseXNpcykge1xuICAgICAgbmV3VXNlckFuYWx5c2lzID0ge1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgW2RhdGVdOiB7XG4gICAgICAgICAgICBzbGVlcDogc2xlZXBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHVpZDogdWlkLFxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIG5ld1VzZXJBbmFseXNpcyA9IHVzZXJBbmFseXNpcztcbiAgICAgIGlmICghbmV3VXNlckFuYWx5c2lzLmRhdGFbZGF0ZV0pIG5ld1VzZXJBbmFseXNpcy5kYXRhW2RhdGVdID0ge307XG4gICAgICBuZXdVc2VyQW5hbHlzaXMuZGF0YVtkYXRlXVsnc2xlZXAnXSA9IHNsZWVwO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5maXJlc3RvcmUuZG9jKGB1c2Vyc2FuYWx5c2lzLyR7dWlkfWApLnNldChuZXdVc2VyQW5hbHlzaXMpO1xuICB9XG5cbn1cblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRNZWFzdXJlbWVudCA9IHtcbiAgYXJtOiAwLFxuICBjaGVzdDogMCxcbiAgaGlwczogMCxcbiAgc3RvbWFjaDogMCxcbiAgdGhpZ2g6IDAsXG4gIHdhaXN0OiAwLFxufVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdFNsZWVwID0ge1xuICBzbGVlcEhyczogOCxcbiAgc2xlZXBUaW1lOiAnMjI6MDAnLFxuICB3YWtldXBUaW1lOiAnMDY6MDAnXG59XG4iXX0=
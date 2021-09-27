import { __awaiter } from "tslib";
import { Injectable } from "@angular/core";
import moment from 'moment';
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
    sleepTime: moment(moment().format('YYYY-MM-DD') + ' 22:00').toISOString(),
    wakeupTime: moment(moment().format('YYYY-MM-DD') + ' 06:00').toISOString()
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hbmFseXNpcy5yZXNvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1maXRlbG8vc3JjL2xpYi9yZXNvdXJjZXMvZmlyZXN0b3JlL3VzZXItYW5hbHlzaXMucmVzb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxNQUFNLE1BQU0sUUFBUSxDQUFDOzs7QUFLNUIsTUFBTSxPQUFPLG9CQUFvQjtJQUUvQixZQUNVLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQ2xDLENBQUM7SUFFRSxlQUFlLENBQUMsR0FBVzs7WUFDL0IsSUFBSSxZQUFZLEdBQVEsSUFBSSxDQUFDO1lBQzdCLElBQUk7Z0JBQ0YsWUFBWSxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQzVGO1lBQ0QsT0FBTSxDQUFDLEVBQUUsR0FBRTtZQUNYLE9BQU8sWUFBWSxDQUFDO1FBQ3RCLENBQUM7S0FBQTtJQUVLLGNBQWMsQ0FBQyxHQUFXLEVBQUUsSUFBa0Q7O1lBQ2xGLE1BQU0sWUFBWSxHQUFHLE1BQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNyRCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2xELENBQUM7S0FBQTtJQUVELGVBQWUsQ0FBQyxZQUFZLEVBQUUsSUFBa0Q7UUFDOUUsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNqQixJQUFJLElBQUksSUFBSSxhQUFhO2dCQUFFLE9BQU8sa0JBQWtCLENBQUM7WUFDckQsSUFBSSxJQUFJLElBQUks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SyxFQUFFLENBQUM7Q0FDVCxDQUFBO0FBRUQsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUFHO0lBQzFCLFFBQVEsRUFBRSxDQUFDO0lBQ1gsU0FBUyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsV0FBVyxFQUFFO0lBQ3pFLFVBQVUsRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFFLFFBQVEsQ0FBQyxDQUFDLFdBQVcsRUFBRTtDQUMxRSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBbmd1bGFyRmlyZXN0b3JlIH0gZnJvbSBcIkBhbmd1bGFyL2ZpcmUvZmlyZXN0b3JlXCI7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VyQW5hbHlzaXNSZXNvdXJjZSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmaXJlc3RvcmU6IEFuZ3VsYXJGaXJlc3RvcmUsXG4gICkge31cblxuICBhc3luYyBnZXRVc2VyQW5hbHlzaXModWlkOiBzdHJpbmcpIHtcbiAgICBsZXQgdXNlckFuYWx5c2lzOiBhbnkgPSBudWxsO1xuICAgIHRyeSB7XG4gICAgICB1c2VyQW5hbHlzaXMgPSAoYXdhaXQgdGhpcy5maXJlc3RvcmUuZG9jKGB1c2Vyc2FuYWx5c2lzLyR7dWlkfWApLmdldCgpLnRvUHJvbWlzZSgpKS5kYXRhKCk7XG4gICAgfVxuICAgIGNhdGNoKGUpIHt9XG4gICAgcmV0dXJuIHVzZXJBbmFseXNpcztcbiAgfVxuXG4gIGFzeW5jIGdldExhdGVzdEVudHJ5KHVpZDogc3RyaW5nLCB0eXBlOiAnd2VpZ2h0JyB8ICdtZWFzdXJlbWVudCcgfCAnd2F0ZXInIHwgJ3NsZWVwJykge1xuICAgIGNvbnN0IHVzZXJBbmFseXNpcyA9IGF3YWl0IHRoaXMuZ2V0VXNlckFuYWx5c2lzKHVpZCk7XG4gICAgcmV0dXJuIHRoaXMuZmluZExhdGVzdEVudHJ5KHVzZXJBbmFseXNpcywgdHlwZSk7XG4gIH1cblxuICBmaW5kTGF0ZXN0RW50cnkodXNlckFuYWx5c2lzLCB0eXBlOiAnd2VpZ2h0JyB8ICdtZWFzdXJlbWVudCcgfCAnd2F0ZXInIHwgJ3NsZWVwJykge1xuICAgIGlmICghdXNlckFuYWx5c2lzKSB7XG4gICAgICBpZiAodHlwZSA9PSAnbWVhc3VyZW1lbnQnKSByZXR1cm4gZGVmYXVsdE1lYXN1cmVtZW50O1xuICAgICAgaWYgKHR5cGUgPT0gJ3NsZWVwJykgcmV0dXJuIGRlZmF1bHRTbGVlcDtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIGxldCBsYXRlc3RFbnRyeTogYW55ID0gMDtcbiAgICBpZiAodHlwZSA9PSAnbWVhc3VyZW1lbnQnKSBsYXRlc3RFbnRyeSA9IGRlZmF1bHRNZWFzdXJlbWVudDtcbiAgICBpZiAodHlwZSA9PSAnc2xlZXAnKSBsYXRlc3RFbnRyeSA9IGRlZmF1bHRTbGVlcDtcblxuICAgIE9iamVjdC5rZXlzKHVzZXJBbmFseXNpcy5kYXRhKS5zb3J0KCkuZm9yRWFjaCgoZGF0ZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBlbnRyeSA9IHVzZXJBbmFseXNpcy5kYXRhW2RhdGVdO1xuICAgICAgaWYgKGVudHJ5W3R5cGVdKSBsYXRlc3RFbnRyeSA9IGVudHJ5W3R5cGVdO1xuICAgIH0pXG4gICAgcmV0dXJuIGxhdGVzdEVudHJ5O1xuICB9XG5cbiAgYXN5bmMgZ2V0TGF0ZXN0RW50cmllcyh1aWQ6IHN0cmluZywgdHlwZTogJ3dlaWdodCcgfCAnbWVhc3VyZW1lbnQnIHwgJ3dhdGVyJyB8ICdzbGVlcCcsIGhvd01hbnkgPSA3KSB7XG4gICAgY29uc3QgdXNlckFuYWx5c2lzID0gYXdhaXQgdGhpcy5nZXRVc2VyQW5hbHlzaXModWlkKTtcbiAgICByZXR1cm4gdGhpcy5maW5kTGF0ZXN0RW50cmllcyh1c2VyQW5hbHlzaXMsIHR5cGUsIGhvd01hbnkpO1xuICB9XG5cbiAgZmluZExhdGVzdEVudHJpZXModXNlckFuYWx5c2lzLCB0eXBlOiAnd2VpZ2h0JyB8ICdtZWFzdXJlbWVudCcgfCAnd2F0ZXInIHwgJ3NsZWVwJywgaG93TWFueSA9IDcpIHtcbiAgICBpZiAoIXVzZXJBbmFseXNpcyB8fCAhdXNlckFuYWx5c2lzLmRhdGEpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBsZXQgbGF0ZXN0RW50cmllczogYW55W10gPSBbXTtcblxuICAgIE9iamVjdC5rZXlzKHVzZXJBbmFseXNpcy5kYXRhKS5zb3J0KCkuZm9yRWFjaCgoZGF0ZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBlbnRyeSA9IHVzZXJBbmFseXNpcy5kYXRhW2RhdGVdO1xuICAgICAgaWYgKGVudHJ5W3R5cGVdKSBsYXRlc3RFbnRyaWVzLnB1c2goe2RhdGU6IGRhdGUsIHZhbHVlOiBlbnRyeVt0eXBlXX0pO1xuICAgIH0pXG5cbiAgICByZXR1cm4gbGF0ZXN0RW50cmllcy5zb3J0KChhLGIpID0+IGEuZGF0ZSA+IGIuZGF0ZSA/IC0xIDogMSkuc2xpY2UoMCxob3dNYW55KS5zb3J0KChhLGIpID0+IGEuZGF0ZSA8IGIuZGF0ZSA/IC0xIDogMSk7XG4gIH1cblxuICBhc3luYyBzYXZlV2VpZ2h0QW5kTWVhc3VyZW1lbnQodWlkLCBkYXRlLCB3ZWlnaHQsIG1lYXN1cmVtZW50KSB7XG4gICAgbGV0IG5ld1VzZXJBbmFseXNpczogYW55ID0ge307XG4gICAgY29uc3QgdXNlckFuYWx5c2lzID0gYXdhaXQgdGhpcy5nZXRVc2VyQW5hbHlzaXModWlkKTtcbiAgICBpZiAoIXVzZXJBbmFseXNpcykge1xuICAgICAgbmV3VXNlckFuYWx5c2lzID0ge1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgW2RhdGVdOiB7XG4gICAgICAgICAgICBtZWFzdXJlbWVudDogbWVhc3VyZW1lbnQsXG4gICAgICAgICAgICB3ZWlnaHQ6IHdlaWdodFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdWlkOiB1aWQsXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbmV3VXNlckFuYWx5c2lzID0gdXNlckFuYWx5c2lzO1xuICAgICAgaWYgKCFuZXdVc2VyQW5hbHlzaXMuZGF0YVtkYXRlXSkgbmV3VXNlckFuYWx5c2lzLmRhdGFbZGF0ZV0gPSB7fTtcbiAgICAgIG5ld1VzZXJBbmFseXNpcy5kYXRhW2RhdGVdWydtZWFzdXJlbWVudCddID0gbWVhc3VyZW1lbnQ7XG4gICAgICBuZXdVc2VyQW5hbHlzaXMuZGF0YVtkYXRlXVsnd2VpZ2h0J10gPSB3ZWlnaHQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmZpcmVzdG9yZS5kb2MoYHVzZXJzYW5hbHlzaXMvJHt1aWR9YCkuc2V0KG5ld1VzZXJBbmFseXNpcyk7XG4gIH1cblxuICBhc3luYyBzYXZlV2F0ZXIodWlkLCBkYXRlLCB3YXRlcikge1xuICAgIGxldCBuZXdVc2VyQW5hbHlzaXM6IGFueSA9IHt9O1xuICAgIGNvbnN0IHVzZXJBbmFseXNpcyA9IGF3YWl0IHRoaXMuZ2V0VXNlckFuYWx5c2lzKHVpZCk7XG4gICAgaWYgKCF1c2VyQW5hbHlzaXMpIHtcbiAgICAgIG5ld1VzZXJBbmFseXNpcyA9IHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIFtkYXRlXToge1xuICAgICAgICAgICAgd2F0ZXI6IHdhdGVyXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB1aWQ6IHVpZCxcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBuZXdVc2VyQW5hbHlzaXMgPSB1c2VyQW5hbHlzaXM7XG4gICAgICBpZiAoIW5ld1VzZXJBbmFseXNpcy5kYXRhW2RhdGVdKSBuZXdVc2VyQW5hbHlzaXMuZGF0YVtkYXRlXSA9IHt9O1xuICAgICAgbmV3VXNlckFuYWx5c2lzLmRhdGFbZGF0ZV1bJ3dhdGVyJ10gPSB3YXRlcjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZmlyZXN0b3JlLmRvYyhgdXNlcnNhbmFseXNpcy8ke3VpZH1gKS5zZXQobmV3VXNlckFuYWx5c2lzKTtcbiAgfVxuXG4gIGFzeW5jIHNhdmVTbGVlcCh1aWQsIGRhdGUsIHNsZWVwKSB7XG4gICAgbGV0IG5ld1VzZXJBbmFseXNpczogYW55ID0ge307XG4gICAgY29uc3QgdXNlckFuYWx5c2lzID0gYXdhaXQgdGhpcy5nZXRVc2VyQW5hbHlzaXModWlkKTtcbiAgICBpZiAoIXVzZXJBbmFseXNpcykge1xuICAgICAgbmV3VXNlckFuYWx5c2lzID0ge1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgW2RhdGVdOiB7XG4gICAgICAgICAgICBzbGVlcDogc2xlZXBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHVpZDogdWlkLFxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIG5ld1VzZXJBbmFseXNpcyA9IHVzZXJBbmFseXNpcztcbiAgICAgIGlmICghbmV3VXNlckFuYWx5c2lzLmRhdGFbZGF0ZV0pIG5ld1VzZXJBbmFseXNpcy5kYXRhW2RhdGVdID0ge307XG4gICAgICBuZXdVc2VyQW5hbHlzaXMuZGF0YVtkYXRlXVsnc2xlZXAnXSA9IHNsZWVwO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5maXJlc3RvcmUuZG9jKGB1c2Vyc2FuYWx5c2lzLyR7dWlkfWApLnNldChuZXdVc2VyQW5hbHlzaXMpO1xuICB9XG5cbn1cblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRNZWFzdXJlbWVudCA9IHtcbiAgYXJtOiAwLFxuICBjaGVzdDogMCxcbiAgaGlwczogMCxcbiAgc3RvbWFjaDogMCxcbiAgdGhpZ2g6IDAsXG4gIHdhaXN0OiAwLFxufVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdFNsZWVwID0ge1xuICBzbGVlcEhyczogOCxcbiAgc2xlZXBUaW1lOiBtb21lbnQobW9tZW50KCkuZm9ybWF0KCdZWVlZLU1NLUREJykgKyAnIDIyOjAwJykudG9JU09TdHJpbmcoKSxcbiAgd2FrZXVwVGltZTogbW9tZW50KG1vbWVudCgpLmZvcm1hdCgnWVlZWS1NTS1ERCcpICsnIDA2OjAwJykudG9JU09TdHJpbmcoKVxufVxuIl19
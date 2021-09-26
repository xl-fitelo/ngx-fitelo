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
        Object.values(userAnalysis.data).forEach((entry) => {
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
        Object.keys(userAnalysis.data).forEach((date) => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hbmFseXNpcy5yZXNvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1maXRlbG8vc3JjL2xpYi9yZXNvdXJjZXMvZmlyZXN0b3JlL3VzZXItYW5hbHlzaXMucmVzb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxNQUFNLE1BQU0sUUFBUSxDQUFDOzs7QUFLNUIsTUFBTSxPQUFPLG9CQUFvQjtJQUUvQixZQUNVLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQ2xDLENBQUM7SUFFRSxlQUFlLENBQUMsR0FBVzs7WUFDL0IsSUFBSSxZQUFZLEdBQVEsSUFBSSxDQUFDO1lBQzdCLElBQUk7Z0JBQ0YsWUFBWSxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQzVGO1lBQ0QsT0FBTSxDQUFDLEVBQUUsR0FBRTtZQUNYLE9BQU8sWUFBWSxDQUFDO1FBQ3RCLENBQUM7S0FBQTtJQUVLLGNBQWMsQ0FBQyxHQUFXLEVBQUUsSUFBa0Q7O1lBQ2xGLE1BQU0sWUFBWSxHQUFHLE1BQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNyRCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2xELENBQUM7S0FBQTtJQUVELGVBQWUsQ0FBQyxZQUFZLEVBQUUsSUFBa0Q7UUFDOUUsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNqQixJQUFJLElBQUksSUFBSSxhQUFhO2dCQUFFLE9BQU8sa0JBQWtCLENBQUM7WUFDckQsSUFBSSxJQUFJLElBQUks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RSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLFdBQVcsRUFBRTtJQUN6RSxVQUFVLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRSxRQUFRLENBQUMsQ0FBQyxXQUFXLEVBQUU7Q0FDMUUsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQW5ndWxhckZpcmVzdG9yZSB9IGZyb20gXCJAYW5ndWxhci9maXJlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVXNlckFuYWx5c2lzUmVzb3VyY2Uge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZmlyZXN0b3JlOiBBbmd1bGFyRmlyZXN0b3JlLFxuICApIHt9XG5cbiAgYXN5bmMgZ2V0VXNlckFuYWx5c2lzKHVpZDogc3RyaW5nKSB7XG4gICAgbGV0IHVzZXJBbmFseXNpczogYW55ID0gbnVsbDtcbiAgICB0cnkge1xuICAgICAgdXNlckFuYWx5c2lzID0gKGF3YWl0IHRoaXMuZmlyZXN0b3JlLmRvYyhgdXNlcnNhbmFseXNpcy8ke3VpZH1gKS5nZXQoKS50b1Byb21pc2UoKSkuZGF0YSgpO1xuICAgIH1cbiAgICBjYXRjaChlKSB7fVxuICAgIHJldHVybiB1c2VyQW5hbHlzaXM7XG4gIH1cblxuICBhc3luYyBnZXRMYXRlc3RFbnRyeSh1aWQ6IHN0cmluZywgdHlwZTogJ3dlaWdodCcgfCAnbWVhc3VyZW1lbnQnIHwgJ3dhdGVyJyB8ICdzbGVlcCcpIHtcbiAgICBjb25zdCB1c2VyQW5hbHlzaXMgPSBhd2FpdCB0aGlzLmdldFVzZXJBbmFseXNpcyh1aWQpO1xuICAgIHJldHVybiB0aGlzLmZpbmRMYXRlc3RFbnRyeSh1c2VyQW5hbHlzaXMsIHR5cGUpO1xuICB9XG5cbiAgZmluZExhdGVzdEVudHJ5KHVzZXJBbmFseXNpcywgdHlwZTogJ3dlaWdodCcgfCAnbWVhc3VyZW1lbnQnIHwgJ3dhdGVyJyB8ICdzbGVlcCcpIHtcbiAgICBpZiAoIXVzZXJBbmFseXNpcykge1xuICAgICAgaWYgKHR5cGUgPT0gJ21lYXN1cmVtZW50JykgcmV0dXJuIGRlZmF1bHRNZWFzdXJlbWVudDtcbiAgICAgIGlmICh0eXBlID09ICdzbGVlcCcpIHJldHVybiBkZWZhdWx0U2xlZXA7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBsZXQgbGF0ZXN0RW50cnk6IGFueSA9IDA7XG4gICAgaWYgKHR5cGUgPT0gJ21lYXN1cmVtZW50JykgbGF0ZXN0RW50cnkgPSBkZWZhdWx0TWVhc3VyZW1lbnQ7XG4gICAgaWYgKHR5cGUgPT0gJ3NsZWVwJykgbGF0ZXN0RW50cnkgPSBkZWZhdWx0U2xlZXA7XG5cbiAgICBPYmplY3QudmFsdWVzKHVzZXJBbmFseXNpcy5kYXRhKS5mb3JFYWNoKChlbnRyeTogYW55KSA9PiB7XG4gICAgICBpZiAoZW50cnlbdHlwZV0pIGxhdGVzdEVudHJ5ID0gZW50cnlbdHlwZV07XG4gICAgfSlcbiAgICByZXR1cm4gbGF0ZXN0RW50cnk7XG4gIH1cblxuICBhc3luYyBnZXRMYXRlc3RFbnRyaWVzKHVpZDogc3RyaW5nLCB0eXBlOiAnd2VpZ2h0JyB8ICdtZWFzdXJlbWVudCcgfCAnd2F0ZXInIHwgJ3NsZWVwJywgaG93TWFueSA9IDcpIHtcbiAgICBjb25zdCB1c2VyQW5hbHlzaXMgPSBhd2FpdCB0aGlzLmdldFVzZXJBbmFseXNpcyh1aWQpO1xuICAgIHJldHVybiB0aGlzLmZpbmRMYXRlc3RFbnRyaWVzKHVzZXJBbmFseXNpcywgdHlwZSwgaG93TWFueSk7XG4gIH1cblxuICBmaW5kTGF0ZXN0RW50cmllcyh1c2VyQW5hbHlzaXMsIHR5cGU6ICd3ZWlnaHQnIHwgJ21lYXN1cmVtZW50JyB8ICd3YXRlcicgfCAnc2xlZXAnLCBob3dNYW55ID0gNykge1xuICAgIGlmICghdXNlckFuYWx5c2lzIHx8ICF1c2VyQW5hbHlzaXMuZGF0YSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGxldCBsYXRlc3RFbnRyaWVzOiBhbnlbXSA9IFtdO1xuXG4gICAgT2JqZWN0LmtleXModXNlckFuYWx5c2lzLmRhdGEpLmZvckVhY2goKGRhdGU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZW50cnkgPSB1c2VyQW5hbHlzaXMuZGF0YVtkYXRlXTtcbiAgICAgIGlmIChlbnRyeVt0eXBlXSkgbGF0ZXN0RW50cmllcy5wdXNoKHtkYXRlOiBkYXRlLCB2YWx1ZTogZW50cnlbdHlwZV19KTtcbiAgICB9KVxuXG4gICAgcmV0dXJuIGxhdGVzdEVudHJpZXMuc29ydCgoYSxiKSA9PiBhLmRhdGUgPiBiLmRhdGUgPyAtMSA6IDEpLnNsaWNlKDAsaG93TWFueSkuc29ydCgoYSxiKSA9PiBhLmRhdGUgPCBiLmRhdGUgPyAtMSA6IDEpO1xuICB9XG5cbiAgYXN5bmMgc2F2ZVdlaWdodEFuZE1lYXN1cmVtZW50KHVpZCwgZGF0ZSwgd2VpZ2h0LCBtZWFzdXJlbWVudCkge1xuICAgIGxldCBuZXdVc2VyQW5hbHlzaXM6IGFueSA9IHt9O1xuICAgIGNvbnN0IHVzZXJBbmFseXNpcyA9IGF3YWl0IHRoaXMuZ2V0VXNlckFuYWx5c2lzKHVpZCk7XG4gICAgaWYgKCF1c2VyQW5hbHlzaXMpIHtcbiAgICAgIG5ld1VzZXJBbmFseXNpcyA9IHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIFtkYXRlXToge1xuICAgICAgICAgICAgbWVhc3VyZW1lbnQ6IG1lYXN1cmVtZW50LFxuICAgICAgICAgICAgd2VpZ2h0OiB3ZWlnaHRcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHVpZDogdWlkLFxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIG5ld1VzZXJBbmFseXNpcyA9IHVzZXJBbmFseXNpcztcbiAgICAgIGlmICghbmV3VXNlckFuYWx5c2lzLmRhdGFbZGF0ZV0pIG5ld1VzZXJBbmFseXNpcy5kYXRhW2RhdGVdID0ge307XG4gICAgICBuZXdVc2VyQW5hbHlzaXMuZGF0YVtkYXRlXVsnbWVhc3VyZW1lbnQnXSA9IG1lYXN1cmVtZW50O1xuICAgICAgbmV3VXNlckFuYWx5c2lzLmRhdGFbZGF0ZV1bJ3dlaWdodCddID0gd2VpZ2h0O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5maXJlc3RvcmUuZG9jKGB1c2Vyc2FuYWx5c2lzLyR7dWlkfWApLnNldChuZXdVc2VyQW5hbHlzaXMpO1xuICB9XG5cbiAgYXN5bmMgc2F2ZVdhdGVyKHVpZCwgZGF0ZSwgd2F0ZXIpIHtcbiAgICBsZXQgbmV3VXNlckFuYWx5c2lzOiBhbnkgPSB7fTtcbiAgICBjb25zdCB1c2VyQW5hbHlzaXMgPSBhd2FpdCB0aGlzLmdldFVzZXJBbmFseXNpcyh1aWQpO1xuICAgIGlmICghdXNlckFuYWx5c2lzKSB7XG4gICAgICBuZXdVc2VyQW5hbHlzaXMgPSB7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBbZGF0ZV06IHtcbiAgICAgICAgICAgIHdhdGVyOiB3YXRlclxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdWlkOiB1aWQsXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbmV3VXNlckFuYWx5c2lzID0gdXNlckFuYWx5c2lzO1xuICAgICAgaWYgKCFuZXdVc2VyQW5hbHlzaXMuZGF0YVtkYXRlXSkgbmV3VXNlckFuYWx5c2lzLmRhdGFbZGF0ZV0gPSB7fTtcbiAgICAgIG5ld1VzZXJBbmFseXNpcy5kYXRhW2RhdGVdWyd3YXRlciddID0gd2F0ZXI7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmZpcmVzdG9yZS5kb2MoYHVzZXJzYW5hbHlzaXMvJHt1aWR9YCkuc2V0KG5ld1VzZXJBbmFseXNpcyk7XG4gIH1cblxuICBhc3luYyBzYXZlU2xlZXAodWlkLCBkYXRlLCBzbGVlcCkge1xuICAgIGxldCBuZXdVc2VyQW5hbHlzaXM6IGFueSA9IHt9O1xuICAgIGNvbnN0IHVzZXJBbmFseXNpcyA9IGF3YWl0IHRoaXMuZ2V0VXNlckFuYWx5c2lzKHVpZCk7XG4gICAgaWYgKCF1c2VyQW5hbHlzaXMpIHtcbiAgICAgIG5ld1VzZXJBbmFseXNpcyA9IHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIFtkYXRlXToge1xuICAgICAgICAgICAgc2xlZXA6IHNsZWVwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB1aWQ6IHVpZCxcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBuZXdVc2VyQW5hbHlzaXMgPSB1c2VyQW5hbHlzaXM7XG4gICAgICBpZiAoIW5ld1VzZXJBbmFseXNpcy5kYXRhW2RhdGVdKSBuZXdVc2VyQW5hbHlzaXMuZGF0YVtkYXRlXSA9IHt9O1xuICAgICAgbmV3VXNlckFuYWx5c2lzLmRhdGFbZGF0ZV1bJ3NsZWVwJ10gPSBzbGVlcDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZmlyZXN0b3JlLmRvYyhgdXNlcnNhbmFseXNpcy8ke3VpZH1gKS5zZXQobmV3VXNlckFuYWx5c2lzKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0TWVhc3VyZW1lbnQgPSB7XG4gIGFybTogMCxcbiAgY2hlc3Q6IDAsXG4gIGhpcHM6IDAsXG4gIHN0b21hY2g6IDAsXG4gIHRoaWdoOiAwLFxuICB3YWlzdDogMCxcbn1cblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRTbGVlcCA9IHtcbiAgc2xlZXBIcnM6IDgsXG4gIHNsZWVwVGltZTogbW9tZW50KG1vbWVudCgpLmZvcm1hdCgnWVlZWS1NTS1ERCcpICsgJyAyMjowMCcpLnRvSVNPU3RyaW5nKCksXG4gIHdha2V1cFRpbWU6IG1vbWVudChtb21lbnQoKS5mb3JtYXQoJ1lZWVktTU0tREQnKSArJyAwNjowMCcpLnRvSVNPU3RyaW5nKClcbn1cbiJdfQ==
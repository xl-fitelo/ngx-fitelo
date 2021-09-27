import { __awaiter } from "tslib";
import { Injectable } from "@angular/core";
import moment from "moment";
import * as i0 from "@angular/core";
import * as i1 from "@angular/fire/storage";
export class StorageResource {
    constructor(afStorage) {
        this.afStorage = afStorage;
    }
    uploadUserProfilePic(uid, imageFile) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `users/${uid}/profilePic`;
            yield this.afStorage.upload(path, imageFile);
            return this.fetchUserProfilePicUrl(uid);
        });
    }
    fetchUserProfilePicUrl(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.afStorage.ref(`users/${uid}/profilePic`).getDownloadURL().toPromise();
        });
    }
    uploadUserFile(uid, type, file) {
        const unix = moment().unix();
        const path = `users/${uid}/${type}/${unix}`;
        return this.afStorage.upload(path, file, {
            customMetadata: { name: `${file.name}` },
        });
    }
    fetchUserFiles(uid, type) {
        return __awaiter(this, void 0, void 0, function* () {
            const listResult = yield this.afStorage.ref(`users/${uid}/${type}`).listAll().toPromise();
            return this.fetchAdditionalData(listResult);
        });
    }
    fetchAdditionalData(listResult) {
        return __awaiter(this, void 0, void 0, function* () {
            let files = [];
            for (let i = 0; i < listResult.items.length; i++) {
                let fileRef = listResult.items[i];
                const results = yield Promise.all([fileRef.getMetadata(), fileRef.getDownloadURL()]);
                let file = {
                    Reference: fileRef,
                    name: results[0].customMetadata.name,
                    date: results[0].timeCreated,
                    mimeType: results[0].contentType,
                    url: results[1],
                };
                files.push(file);
            }
            return files.sort((a, b) => a.date > b.date ? -1 : 1);
        });
    }
}
StorageResource.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: StorageResource, deps: [{ token: i1.AngularFireStorage }], target: i0.ɵɵFactoryTarget.Injectable });
StorageResource.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: StorageResource, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: StorageResource, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.AngularFireStorage }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5yZXNvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1maXRlbG8vc3JjL2xpYi9yZXNvdXJjZXMvc3RvcmFnZS9zdG9yYWdlLnJlc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sTUFBTSxNQUFNLFFBQVEsQ0FBQzs7O0FBSzVCLE1BQU0sT0FBTyxlQUFlO0lBRTFCLFlBQ1UsU0FBNkI7UUFBN0IsY0FBUyxHQUFULFNBQVMsQ0FBb0I7SUFDcEMsQ0FBQztJQUVFLG9CQUFvQixDQUFDLEdBQVcsRUFBRSxTQUFjOztZQUNwRCxNQUFNLElBQUksR0FBRyxTQUFTLEdBQUcsYUFBYSxDQUFDO1lBQ3ZDLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQzdDLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLENBQUM7S0FBQTtJQUVLLHNCQUFzQixDQUFDLEdBQVc7O1lBQ3RDLE9BQXlCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN0RyxDQUFDO0tBQUE7SUFHRCxjQUFjLENBQUMsR0FBVyxFQUFFLElBQTRCLEVBQUUsSUFBUztRQUNqRSxNQUFNLElBQUksR0FBRyxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM3QixNQUFNLElBQUksR0FBRyxTQUFTLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFLENBQUM7UUFDNUMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFO1lBQ3ZDLGNBQWMsRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRTtTQUN6QyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUssY0FBYyxDQUFDLEdBQVcsRUFBRSxJQUE0Qjs7WUFDNUQsTUFBTSxVQUFVLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQzFGLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzlDLENBQUM7S0FBQTtJQUVhLG1CQUFtQixDQUFDLFVBQVU7O1lBQzFDLElBQUksS0FBSyxHQUFlLEVBQUUsQ0FBQztZQUMzQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2hELElBQUksT0FBTyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xDLE1BQU0sT0FBTyxHQUFHLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFBO2dCQUNwRixJQUFJLElBQUksR0FBRztvQkFDVCxTQUFTLEVBQUUsT0FBTztvQkFDbEIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSTtvQkFDcEMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXO29CQUM1QixRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVc7b0JBQ2hDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO2lCQUNoQixDQUFDO2dCQUNGLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbEI7WUFDRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RCxDQUFDO0tBQUE7OzRHQTdDVSxlQUFlO2dIQUFmLGVBQWUsY0FGZCxNQUFNOzJGQUVQLGVBQWU7a0JBSDNCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBbmd1bGFyRmlyZVN0b3JhZ2UgfSBmcm9tIFwiQGFuZ3VsYXIvZmlyZS9zdG9yYWdlXCI7XG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JhZ2VSZXNvdXJjZSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhZlN0b3JhZ2U6IEFuZ3VsYXJGaXJlU3RvcmFnZSxcbiAgKSB7fVxuXG4gIGFzeW5jIHVwbG9hZFVzZXJQcm9maWxlUGljKHVpZDogc3RyaW5nLCBpbWFnZUZpbGU6IGFueSkge1xuICAgIGNvbnN0IHBhdGggPSBgdXNlcnMvJHt1aWR9L3Byb2ZpbGVQaWNgO1xuICAgIGF3YWl0IHRoaXMuYWZTdG9yYWdlLnVwbG9hZChwYXRoLCBpbWFnZUZpbGUpO1xuICAgIHJldHVybiB0aGlzLmZldGNoVXNlclByb2ZpbGVQaWNVcmwodWlkKTtcbiAgfVxuXG4gIGFzeW5jIGZldGNoVXNlclByb2ZpbGVQaWNVcmwodWlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gPFByb21pc2U8c3RyaW5nPj4gdGhpcy5hZlN0b3JhZ2UucmVmKGB1c2Vycy8ke3VpZH0vcHJvZmlsZVBpY2ApLmdldERvd25sb2FkVVJMKCkudG9Qcm9taXNlKCk7XG4gIH1cblxuXG4gIHVwbG9hZFVzZXJGaWxlKHVpZDogc3RyaW5nLCB0eXBlOiAncmVwb3J0cycgfCAncGljdHVyZXMnLCBmaWxlOiBhbnkpIHtcbiAgICBjb25zdCB1bml4ID0gbW9tZW50KCkudW5peCgpO1xuICAgIGNvbnN0IHBhdGggPSBgdXNlcnMvJHt1aWR9LyR7dHlwZX0vJHt1bml4fWA7XG4gICAgcmV0dXJuIHRoaXMuYWZTdG9yYWdlLnVwbG9hZChwYXRoLCBmaWxlLCB7XG4gICAgICBjdXN0b21NZXRhZGF0YTogeyBuYW1lOiBgJHtmaWxlLm5hbWV9YCB9LFxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgZmV0Y2hVc2VyRmlsZXModWlkOiBzdHJpbmcsIHR5cGU6ICdyZXBvcnRzJyB8ICdwaWN0dXJlcycpIHtcbiAgICBjb25zdCBsaXN0UmVzdWx0ID0gYXdhaXQgdGhpcy5hZlN0b3JhZ2UucmVmKGB1c2Vycy8ke3VpZH0vJHt0eXBlfWApLmxpc3RBbGwoKS50b1Byb21pc2UoKTtcbiAgICByZXR1cm4gdGhpcy5mZXRjaEFkZGl0aW9uYWxEYXRhKGxpc3RSZXN1bHQpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBmZXRjaEFkZGl0aW9uYWxEYXRhKGxpc3RSZXN1bHQpIHtcbiAgICBsZXQgZmlsZXM6IEZpbGVEYXRhW10gPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RSZXN1bHQuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBmaWxlUmVmID0gbGlzdFJlc3VsdC5pdGVtc1tpXTtcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbChbZmlsZVJlZi5nZXRNZXRhZGF0YSgpLCBmaWxlUmVmLmdldERvd25sb2FkVVJMKCldKVxuICAgICAgbGV0IGZpbGUgPSB7XG4gICAgICAgIFJlZmVyZW5jZTogZmlsZVJlZixcbiAgICAgICAgbmFtZTogcmVzdWx0c1swXS5jdXN0b21NZXRhZGF0YS5uYW1lLFxuICAgICAgICBkYXRlOiByZXN1bHRzWzBdLnRpbWVDcmVhdGVkLFxuICAgICAgICBtaW1lVHlwZTogcmVzdWx0c1swXS5jb250ZW50VHlwZSxcbiAgICAgICAgdXJsOiByZXN1bHRzWzFdLFxuICAgICAgfTtcbiAgICAgIGZpbGVzLnB1c2goZmlsZSk7XG4gICAgfVxuICAgIHJldHVybiBmaWxlcy5zb3J0KChhLGIpID0+IGEuZGF0ZSA+IGIuZGF0ZSA/IC0xIDogMSk7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaWxlRGF0YSB7XG4gIFJlZmVyZW5jZTogYW55O1xuICBuYW1lOiBzdHJpbmc7XG4gIGRhdGU6IHN0cmluZztcbiAgbWltZVR5cGU6IHN0cmluZztcbiAgdXJsOiBzdHJpbmc7XG59XG4iXX0=
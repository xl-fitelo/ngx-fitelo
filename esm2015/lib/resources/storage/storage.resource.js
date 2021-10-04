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
        const name = file['name'] ? file['name'] : type + '-' + Math.random().toString().slice(2);
        return this.afStorage.upload(path, file, {
            customMetadata: { name: `${name}` },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5yZXNvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1maXRlbG8vc3JjL2xpYi9yZXNvdXJjZXMvc3RvcmFnZS9zdG9yYWdlLnJlc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sTUFBTSxNQUFNLFFBQVEsQ0FBQzs7O0FBSzVCLE1BQU0sT0FBTyxlQUFlO0lBRTFCLFlBQ1UsU0FBNkI7UUFBN0IsY0FBUyxHQUFULFNBQVMsQ0FBb0I7SUFDcEMsQ0FBQztJQUVFLG9CQUFvQixDQUFDLEdBQVcsRUFBRSxTQUFjOztZQUNwRCxNQUFNLElBQUksR0FBRyxTQUFTLEdBQUcsYUFBYSxDQUFDO1lBQ3ZDLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQzdDLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLENBQUM7S0FBQTtJQUVLLHNCQUFzQixDQUFDLEdBQVc7O1lBQ3RDLE9BQXlCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN0RyxDQUFDO0tBQUE7SUFFRCxjQUFjLENBQUMsR0FBVyxFQUFFLElBQTRCLEVBQUUsSUFBaUI7UUFDekUsTUFBTSxJQUFJLEdBQUcsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDN0IsTUFBTSxJQUFJLEdBQUcsU0FBUyxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDO1FBQzVDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDekYsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFO1lBQ3ZDLGNBQWMsRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLElBQUksRUFBRSxFQUFFO1NBQ3BDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFSyxjQUFjLENBQUMsR0FBVyxFQUFFLElBQTRCOztZQUM1RCxNQUFNLFVBQVUsR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDMUYsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDOUMsQ0FBQztLQUFBO0lBRWEsbUJBQW1CLENBQUMsVUFBVTs7WUFDMUMsSUFBSSxLQUFLLEdBQWUsRUFBRSxDQUFDO1lBQzNCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDaEQsSUFBSSxPQUFPLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbEMsTUFBTSxPQUFPLEdBQUcsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUE7Z0JBQ3BGLElBQUksSUFBSSxHQUFHO29CQUNULFNBQVMsRUFBRSxPQUFPO29CQUNsQixJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJO29CQUNwQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVc7b0JBQzVCLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVztvQkFDaEMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7aUJBQ2hCLENBQUM7Z0JBQ0YsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNsQjtZQUNELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELENBQUM7S0FBQTs7NEdBN0NVLGVBQWU7Z0hBQWYsZUFBZSxjQUZkLE1BQU07MkZBRVAsZUFBZTtrQkFIM0IsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFuZ3VsYXJGaXJlU3RvcmFnZSB9IGZyb20gXCJAYW5ndWxhci9maXJlL3N0b3JhZ2VcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmFnZVJlc291cmNlIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFmU3RvcmFnZTogQW5ndWxhckZpcmVTdG9yYWdlLFxuICApIHt9XG5cbiAgYXN5bmMgdXBsb2FkVXNlclByb2ZpbGVQaWModWlkOiBzdHJpbmcsIGltYWdlRmlsZTogYW55KSB7XG4gICAgY29uc3QgcGF0aCA9IGB1c2Vycy8ke3VpZH0vcHJvZmlsZVBpY2A7XG4gICAgYXdhaXQgdGhpcy5hZlN0b3JhZ2UudXBsb2FkKHBhdGgsIGltYWdlRmlsZSk7XG4gICAgcmV0dXJuIHRoaXMuZmV0Y2hVc2VyUHJvZmlsZVBpY1VybCh1aWQpO1xuICB9XG5cbiAgYXN5bmMgZmV0Y2hVc2VyUHJvZmlsZVBpY1VybCh1aWQ6IHN0cmluZykge1xuICAgIHJldHVybiA8UHJvbWlzZTxzdHJpbmc+PiB0aGlzLmFmU3RvcmFnZS5yZWYoYHVzZXJzLyR7dWlkfS9wcm9maWxlUGljYCkuZ2V0RG93bmxvYWRVUkwoKS50b1Byb21pc2UoKTtcbiAgfVxuXG4gIHVwbG9hZFVzZXJGaWxlKHVpZDogc3RyaW5nLCB0eXBlOiAncmVwb3J0cycgfCAncGljdHVyZXMnLCBmaWxlOiBGaWxlIHwgQmxvYikge1xuICAgIGNvbnN0IHVuaXggPSBtb21lbnQoKS51bml4KCk7XG4gICAgY29uc3QgcGF0aCA9IGB1c2Vycy8ke3VpZH0vJHt0eXBlfS8ke3VuaXh9YDtcbiAgICBjb25zdCBuYW1lID0gZmlsZVsnbmFtZSddID8gZmlsZVsnbmFtZSddIDogdHlwZSArICctJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoKS5zbGljZSgyKVxuICAgIHJldHVybiB0aGlzLmFmU3RvcmFnZS51cGxvYWQocGF0aCwgZmlsZSwge1xuICAgICAgY3VzdG9tTWV0YWRhdGE6IHsgbmFtZTogYCR7bmFtZX1gIH0sXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBmZXRjaFVzZXJGaWxlcyh1aWQ6IHN0cmluZywgdHlwZTogJ3JlcG9ydHMnIHwgJ3BpY3R1cmVzJykge1xuICAgIGNvbnN0IGxpc3RSZXN1bHQgPSBhd2FpdCB0aGlzLmFmU3RvcmFnZS5yZWYoYHVzZXJzLyR7dWlkfS8ke3R5cGV9YCkubGlzdEFsbCgpLnRvUHJvbWlzZSgpO1xuICAgIHJldHVybiB0aGlzLmZldGNoQWRkaXRpb25hbERhdGEobGlzdFJlc3VsdCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGZldGNoQWRkaXRpb25hbERhdGEobGlzdFJlc3VsdCkge1xuICAgIGxldCBmaWxlczogRmlsZURhdGFbXSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdFJlc3VsdC5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGZpbGVSZWYgPSBsaXN0UmVzdWx0Lml0ZW1zW2ldO1xuICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKFtmaWxlUmVmLmdldE1ldGFkYXRhKCksIGZpbGVSZWYuZ2V0RG93bmxvYWRVUkwoKV0pXG4gICAgICBsZXQgZmlsZSA9IHtcbiAgICAgICAgUmVmZXJlbmNlOiBmaWxlUmVmLFxuICAgICAgICBuYW1lOiByZXN1bHRzWzBdLmN1c3RvbU1ldGFkYXRhLm5hbWUsXG4gICAgICAgIGRhdGU6IHJlc3VsdHNbMF0udGltZUNyZWF0ZWQsXG4gICAgICAgIG1pbWVUeXBlOiByZXN1bHRzWzBdLmNvbnRlbnRUeXBlLFxuICAgICAgICB1cmw6IHJlc3VsdHNbMV0sXG4gICAgICB9O1xuICAgICAgZmlsZXMucHVzaChmaWxlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZpbGVzLnNvcnQoKGEsYikgPT4gYS5kYXRlID4gYi5kYXRlID8gLTEgOiAxKTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpbGVEYXRhIHtcbiAgLy8gZmlyZWJhc2Uuc3RvcmFnZS5SZWZlcmVuY2VcbiAgLy8gd2lsbCBiZSB1c2VkIHRvIGRlbGV0ZSB1c2luZyAuUmVmZXJlbmNlLmRlbGV0ZSgpXG4gIFJlZmVyZW5jZTogYW55O1xuICBuYW1lOiBzdHJpbmc7XG4gIGRhdGU6IHN0cmluZztcbiAgbWltZVR5cGU6IHN0cmluZztcbiAgdXJsOiBzdHJpbmc7XG59XG4iXX0=
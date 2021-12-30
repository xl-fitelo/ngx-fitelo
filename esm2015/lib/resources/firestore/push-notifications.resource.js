import { __awaiter } from "tslib";
import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/fire/firestore";
export class PushNotificationsResource {
    constructor(firestore) {
        this.firestore = firestore;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.firestore.collection('pushNotifications', q => q.orderBy('timestamp', 'desc')).get().toPromise()).docs.map(d => d.data());
        });
    }
}
PushNotificationsResource.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: PushNotificationsResource, deps: [{ token: i1.AngularFirestore }], target: i0.ɵɵFactoryTarget.Injectable });
PushNotificationsResource.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: PushNotificationsResource, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: PushNotificationsResource, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.AngularFirestore }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVzaC1ub3RpZmljYXRpb25zLnJlc291cmNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWZpdGVsby9zcmMvbGliL3Jlc291cmNlcy9maXJlc3RvcmUvcHVzaC1ub3RpZmljYXRpb25zLnJlc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFNM0MsTUFBTSxPQUFPLHlCQUF5QjtJQUVwQyxZQUNVLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQ2xDLENBQUM7SUFFRSxNQUFNOztZQUNWLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUF1QixtQkFBbUIsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDckssQ0FBQztLQUFBOztzSEFSVSx5QkFBeUI7MEhBQXpCLHlCQUF5QixjQUZ4QixNQUFNOzJGQUVQLHlCQUF5QjtrQkFIckMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFuZ3VsYXJGaXJlc3RvcmUgfSBmcm9tIFwiQGFuZ3VsYXIvZmlyZS9maXJlc3RvcmVcIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFB1c2hOb3RpZmljYXRpb25zUmVzb3VyY2Uge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZmlyZXN0b3JlOiBBbmd1bGFyRmlyZXN0b3JlLFxuICApIHt9XG5cbiAgYXN5bmMgZ2V0QWxsKCk6IFByb21pc2U8UHVzaE5vdGlmaWNhdGlvbkRpY3RbXT4ge1xuICAgIHJldHVybiAoYXdhaXQgdGhpcy5maXJlc3RvcmUuY29sbGVjdGlvbjxQdXNoTm90aWZpY2F0aW9uRGljdD4oJ3B1c2hOb3RpZmljYXRpb25zJywgcSA9PiBxLm9yZGVyQnkoJ3RpbWVzdGFtcCcsICdkZXNjJykpLmdldCgpLnRvUHJvbWlzZSgpKS5kb2NzLm1hcChkID0+IGQuZGF0YSgpKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHVzaE5vdGlmaWNhdGlvbkRpY3Qge1xuICB0aXRsZTogc3RyaW5nXG4gIHRleHQ6IHN0cmluZ1xuICB0aW1lc3RhbXA6IERhdGVcbiAgY3VzdG9tRGF0YToge1trZXk6c3RyaW5nXTogc3RyaW5nfVxufVxuIl19
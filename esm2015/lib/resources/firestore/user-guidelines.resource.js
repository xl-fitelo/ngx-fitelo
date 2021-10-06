import { __awaiter } from "tslib";
import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/fire/firestore";
export class UserGuidelinesResource {
    constructor(afs) {
        this.afs = afs;
    }
    getGuidelines(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = null;
            try {
                data = (yield this.afs.doc(`userGuidelines/${uid}`).get().toPromise()).data();
            }
            catch (e) {
            }
            return data;
        });
    }
}
UserGuidelinesResource.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: UserGuidelinesResource, deps: [{ token: i1.AngularFirestore }], target: i0.ɵɵFactoryTarget.Injectable });
UserGuidelinesResource.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: UserGuidelinesResource, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: UserGuidelinesResource, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.AngularFirestore }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1ndWlkZWxpbmVzLnJlc291cmNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWZpdGVsby9zcmMvbGliL3Jlc291cmNlcy9maXJlc3RvcmUvdXNlci1ndWlkZWxpbmVzLnJlc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFZM0MsTUFBTSxPQUFPLHNCQUFzQjtJQUVqQyxZQUFvQixHQUFxQjtRQUFyQixRQUFHLEdBQUgsR0FBRyxDQUFrQjtJQUFHLENBQUM7SUFFdkMsYUFBYSxDQUFDLEdBQVc7O1lBQzdCLElBQUksSUFBSSxHQUFRLElBQUksQ0FBQztZQUNyQixJQUFJO2dCQUNGLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQTthQUM5RTtZQUNELE9BQU8sQ0FBQyxFQUFFO2FBRVQ7WUFDRCxPQUFPLElBQUksQ0FBQztRQUNkLENBQUM7S0FBQTs7bUhBYlUsc0JBQXNCO3VIQUF0QixzQkFBc0IsY0FGckIsTUFBTTsyRkFFUCxzQkFBc0I7a0JBSGxDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBbmd1bGFyRmlyZXN0b3JlIH0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9maXJlc3RvcmUnO1xuXG5pbnRlcmZhY2UgR3VpZGVsaW5lIHtcbiAgZG9zPzogc3RyaW5nW10sXG4gIGRvbnRzPzogc3RyaW5nW10sXG4gIGluc3RydWN0aW9ucz86IHN0cmluZ1tdXG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VyR3VpZGVsaW5lc1Jlc291cmNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFmczogQW5ndWxhckZpcmVzdG9yZSkge31cblxuICBhc3luYyBnZXRHdWlkZWxpbmVzKHVpZDogc3RyaW5nKSB7XG4gICAgbGV0IGRhdGE6IGFueSA9IG51bGw7XG4gICAgdHJ5IHtcbiAgICAgIGRhdGEgPSAoYXdhaXQgdGhpcy5hZnMuZG9jKGB1c2VyR3VpZGVsaW5lcy8ke3VpZH1gKS5nZXQoKS50b1Byb21pc2UoKSkuZGF0YSgpXG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG5cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxufVxuIl19
import { __awaiter } from "tslib";
import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/fire/firestore";
export class UsersResource {
    constructor(firestore) {
        this.firestore = firestore;
    }
    getUser(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = (yield this.firestore.doc(`users/${uid}`).get().toPromise()).data();
            return user;
        });
    }
}
UsersResource.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: UsersResource, deps: [{ token: i1.AngularFirestore }], target: i0.ɵɵFactoryTarget.Injectable });
UsersResource.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: UsersResource, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: UsersResource, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.AngularFirestore }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucmVzb3VyY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZml0ZWxvL3NyYy9saWIvcmVzb3VyY2VzL2ZpcmVzdG9yZS91c2Vycy5yZXNvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBTTNDLE1BQU0sT0FBTyxhQUFhO0lBRXhCLFlBQ1UsU0FBMkI7UUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFDbEMsQ0FBQztJQUVFLE9BQU8sQ0FBQyxHQUFXOztZQUN2QixNQUFNLElBQUksR0FBUSxDQUFDLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUE7WUFDckYsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO0tBQUE7OzBHQVRVLGFBQWE7OEdBQWIsYUFBYSxjQUZaLE1BQU07MkZBRVAsYUFBYTtrQkFIekIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFuZ3VsYXJGaXJlc3RvcmUgfSBmcm9tIFwiQGFuZ3VsYXIvZmlyZS9maXJlc3RvcmVcIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJzUmVzb3VyY2Uge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZmlyZXN0b3JlOiBBbmd1bGFyRmlyZXN0b3JlLFxuICApIHt9XG5cbiAgYXN5bmMgZ2V0VXNlcih1aWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHVzZXI6IGFueSA9IChhd2FpdCB0aGlzLmZpcmVzdG9yZS5kb2MoYHVzZXJzLyR7dWlkfWApLmdldCgpLnRvUHJvbWlzZSgpKS5kYXRhKClcbiAgICByZXR1cm4gdXNlcjtcbiAgfVxuXG59XG4iXX0=
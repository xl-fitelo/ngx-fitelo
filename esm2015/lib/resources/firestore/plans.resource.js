import { __awaiter } from "tslib";
import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/fire/firestore";
export class PlansResource {
    constructor(firestore) {
        this.firestore = firestore;
    }
    mget(planIds) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.firestore.collection('plans', q => q.where('id', 'in', planIds)).get().toPromise()).docs.map(d => d.data());
        });
    }
}
PlansResource.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: PlansResource, deps: [{ token: i1.AngularFirestore }], target: i0.ɵɵFactoryTarget.Injectable });
PlansResource.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: PlansResource, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: PlansResource, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.AngularFirestore }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhbnMucmVzb3VyY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZml0ZWxvL3NyYy9saWIvcmVzb3VyY2VzL2ZpcmVzdG9yZS9wbGFucy5yZXNvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBTTNDLE1BQU0sT0FBTyxhQUFhO0lBRXhCLFlBQ1UsU0FBMkI7UUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFDbEMsQ0FBQztJQUVFLElBQUksQ0FBQyxPQUFpQjs7WUFDMUIsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDakksQ0FBQztLQUFBOzswR0FSVSxhQUFhOzhHQUFiLGFBQWEsY0FGWixNQUFNOzJGQUVQLGFBQWE7a0JBSHpCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBbmd1bGFyRmlyZXN0b3JlIH0gZnJvbSBcIkBhbmd1bGFyL2ZpcmUvZmlyZXN0b3JlXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQbGFuc1Jlc291cmNlIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZpcmVzdG9yZTogQW5ndWxhckZpcmVzdG9yZSxcbiAgKSB7fVxuXG4gIGFzeW5jIG1nZXQocGxhbklkczogc3RyaW5nW10pIHtcbiAgICByZXR1cm4gKGF3YWl0IHRoaXMuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3BsYW5zJywgcSA9PiBxLndoZXJlKCdpZCcsICdpbicsIHBsYW5JZHMpKS5nZXQoKS50b1Byb21pc2UoKSkuZG9jcy5tYXAoZCA9PiBkLmRhdGEoKSk7XG4gIH1cblxufVxuIl19
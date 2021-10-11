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
            const dbPlans = (yield this.firestore.collection('plans', q => q.where('id', 'in', planIds)).get().toPromise()).docs.map(d => d.data());
            const plans = [];
            planIds.forEach(planId => {
                plans.push(dbPlans.find(p => p.id == planId));
            });
            // FIX: firestore merge same planIds
            return plans;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhbnMucmVzb3VyY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZml0ZWxvL3NyYy9saWIvcmVzb3VyY2VzL2ZpcmVzdG9yZS9wbGFucy5yZXNvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBTTNDLE1BQU0sT0FBTyxhQUFhO0lBRXhCLFlBQ1UsU0FBMkI7UUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFDbEMsQ0FBQztJQUVFLElBQUksQ0FBQyxPQUFpQjs7WUFDMUIsTUFBTSxPQUFPLEdBQVcsQ0FBQyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ2hKLE1BQU0sS0FBSyxHQUFVLEVBQUUsQ0FBQztZQUN4QixPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUN2QixLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDaEQsQ0FBQyxDQUFDLENBQUE7WUFDRixvQ0FBb0M7WUFDcEMsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDO0tBQUE7OzBHQWRVLGFBQWE7OEdBQWIsYUFBYSxjQUZaLE1BQU07MkZBRVAsYUFBYTtrQkFIekIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFuZ3VsYXJGaXJlc3RvcmUgfSBmcm9tIFwiQGFuZ3VsYXIvZmlyZS9maXJlc3RvcmVcIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFBsYW5zUmVzb3VyY2Uge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZmlyZXN0b3JlOiBBbmd1bGFyRmlyZXN0b3JlLFxuICApIHt9XG5cbiAgYXN5bmMgbWdldChwbGFuSWRzOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IGRiUGxhbnM6IGFueVtdID0gIChhd2FpdCB0aGlzLmZpcmVzdG9yZS5jb2xsZWN0aW9uKCdwbGFucycsIHEgPT4gcS53aGVyZSgnaWQnLCAnaW4nLCBwbGFuSWRzKSkuZ2V0KCkudG9Qcm9taXNlKCkpLmRvY3MubWFwKGQgPT4gZC5kYXRhKCkpO1xuICAgIGNvbnN0IHBsYW5zOiBhbnlbXSA9IFtdO1xuICAgIHBsYW5JZHMuZm9yRWFjaChwbGFuSWQgPT4ge1xuICAgICAgcGxhbnMucHVzaChkYlBsYW5zLmZpbmQocCA9PiBwLmlkID09IHBsYW5JZCkpO1xuICAgIH0pXG4gICAgLy8gRklYOiBmaXJlc3RvcmUgbWVyZ2Ugc2FtZSBwbGFuSWRzXG4gICAgcmV0dXJuIHBsYW5zO1xuICB9XG5cbn1cbiJdfQ==
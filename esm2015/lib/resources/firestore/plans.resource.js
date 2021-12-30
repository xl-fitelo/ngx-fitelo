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
                plans.push(Object.assign({}, dbPlans.find(p => p.id == planId)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhbnMucmVzb3VyY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZml0ZWxvL3NyYy9saWIvcmVzb3VyY2VzL2ZpcmVzdG9yZS9wbGFucy5yZXNvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBTTNDLE1BQU0sT0FBTyxhQUFhO0lBRXhCLFlBQ1UsU0FBMkI7UUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFDbEMsQ0FBQztJQUVFLElBQUksQ0FBQyxPQUFpQjs7WUFDMUIsTUFBTSxPQUFPLEdBQVcsQ0FBQyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ2hKLE1BQU0sS0FBSyxHQUFVLEVBQUUsQ0FBQztZQUN4QixPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUN2QixLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuRSxDQUFDLENBQUMsQ0FBQTtZQUNGLG9DQUFvQztZQUNwQyxPQUFPLEtBQUssQ0FBQztRQUNmLENBQUM7S0FBQTs7MEdBZFUsYUFBYTs4R0FBYixhQUFhLGNBRlosTUFBTTsyRkFFUCxhQUFhO2tCQUh6QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQW5ndWxhckZpcmVzdG9yZSB9IGZyb20gXCJAYW5ndWxhci9maXJlL2ZpcmVzdG9yZVwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUGxhbnNSZXNvdXJjZSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmaXJlc3RvcmU6IEFuZ3VsYXJGaXJlc3RvcmUsXG4gICkge31cblxuICBhc3luYyBtZ2V0KHBsYW5JZHM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgZGJQbGFuczogYW55W10gPSAgKGF3YWl0IHRoaXMuZmlyZXN0b3JlLmNvbGxlY3Rpb24oJ3BsYW5zJywgcSA9PiBxLndoZXJlKCdpZCcsICdpbicsIHBsYW5JZHMpKS5nZXQoKS50b1Byb21pc2UoKSkuZG9jcy5tYXAoZCA9PiBkLmRhdGEoKSk7XG4gICAgY29uc3QgcGxhbnM6IGFueVtdID0gW107XG4gICAgcGxhbklkcy5mb3JFYWNoKHBsYW5JZCA9PiB7XG4gICAgICBwbGFucy5wdXNoKE9iamVjdC5hc3NpZ24oe30sIGRiUGxhbnMuZmluZChwID0+IHAuaWQgPT0gcGxhbklkKSkpO1xuICAgIH0pXG4gICAgLy8gRklYOiBmaXJlc3RvcmUgbWVyZ2Ugc2FtZSBwbGFuSWRzXG4gICAgcmV0dXJuIHBsYW5zO1xuICB9XG5cbn1cbiJdfQ==
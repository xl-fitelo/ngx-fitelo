import { __awaiter } from "tslib";
import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/fire/firestore";
export class CustomOptionsResource {
    constructor(firestore) {
        this.firestore = firestore;
    }
    getAllMedicalCondtions() {
        return __awaiter(this, void 0, void 0, function* () {
            const mc = (yield this.firestore.doc('customOptions/medicalConditions').get().toPromise()).data();
            return mc.value;
        });
    }
}
CustomOptionsResource.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: CustomOptionsResource, deps: [{ token: i1.AngularFirestore }], target: i0.ɵɵFactoryTarget.Injectable });
CustomOptionsResource.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: CustomOptionsResource, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: CustomOptionsResource, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.AngularFirestore }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLW9wdGlvbnMucmVzb3VyY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZml0ZWxvL3NyYy9saWIvcmVzb3VyY2VzL2ZpcmVzdG9yZS9jdXN0b20tb3B0aW9ucy5yZXNvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBTTNDLE1BQU0sT0FBTyxxQkFBcUI7SUFFaEMsWUFDVSxTQUEyQjtRQUEzQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUNsQyxDQUFDO0lBRUUsc0JBQXNCOztZQUMxQixNQUFNLEVBQUUsR0FBUSxDQUFDLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3ZHLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQztRQUNsQixDQUFDO0tBQUE7O2tIQVRVLHFCQUFxQjtzSEFBckIscUJBQXFCLGNBRnBCLE1BQU07MkZBRVAscUJBQXFCO2tCQUhqQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQW5ndWxhckZpcmVzdG9yZSB9IGZyb20gXCJAYW5ndWxhci9maXJlL2ZpcmVzdG9yZVwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tT3B0aW9uc1Jlc291cmNlIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZpcmVzdG9yZTogQW5ndWxhckZpcmVzdG9yZSxcbiAgKSB7fVxuXG4gIGFzeW5jIGdldEFsbE1lZGljYWxDb25kdGlvbnMoKSB7XG4gICAgY29uc3QgbWM6IGFueSA9IChhd2FpdCB0aGlzLmZpcmVzdG9yZS5kb2MoJ2N1c3RvbU9wdGlvbnMvbWVkaWNhbENvbmRpdGlvbnMnKS5nZXQoKS50b1Byb21pc2UoKSkuZGF0YSgpO1xuICAgIHJldHVybiBtYy52YWx1ZTtcbiAgfVxuXG59XG4iXX0=
import { __awaiter } from "tslib";
import { Injectable } from "@angular/core";
import moment from "moment";
import * as i0 from "@angular/core";
import * as i1 from "@angular/fire/firestore";
export class UsersPaymentResource {
    constructor(firestore) {
        this.firestore = firestore;
    }
    doc(uid) {
        return this.firestore.doc(`usersPayment/${uid}`);
    }
    updatePayment(uid, plan, request) {
        return __awaiter(this, void 0, void 0, function* () {
            let userPayment = (yield this.doc(uid).get().toPromise()).data();
            if (!userPayment) {
                userPayment = {
                    uid: uid,
                    data: []
                };
            }
            ;
            userPayment.data.push({
                date: moment().format('YYYY-MM-DD HH:mm:ss'),
                paymentId: request['paymentId'],
                orderId: request['orderId'],
                planId: plan.id,
            });
            return this.doc(uid).set(userPayment);
        });
    }
}
UsersPaymentResource.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: UsersPaymentResource, deps: [{ token: i1.AngularFirestore }], target: i0.ɵɵFactoryTarget.Injectable });
UsersPaymentResource.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: UsersPaymentResource, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: UsersPaymentResource, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.AngularFirestore }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMtcGF5bWVudC5yZXNvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1maXRlbG8vc3JjL2xpYi9yZXNvdXJjZXMvZmlyZXN0b3JlL3VzZXJzLXBheW1lbnQucmVzb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxNQUFNLE1BQU0sUUFBUSxDQUFDOzs7QUFLNUIsTUFBTSxPQUFPLG9CQUFvQjtJQUUvQixZQUNVLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQ2xDLENBQUM7SUFFSixHQUFHLENBQUMsR0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVLLGFBQWEsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLE9BQU87O1lBQ3BDLElBQUksV0FBVyxHQUFRLENBQUMsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDdEUsSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDaEIsV0FBVyxHQUFHO29CQUNaLEdBQUcsRUFBRSxHQUFHO29CQUNSLElBQUksRUFBRSxFQUFFO2lCQUNULENBQUE7YUFDRjtZQUFBLENBQUM7WUFDRixXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDcEIsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQztnQkFDNUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUM7Z0JBQy9CLE9BQU8sRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDO2dCQUMzQixNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUU7YUFDaEIsQ0FBQyxDQUFBO1lBQ0YsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN4QyxDQUFDO0tBQUE7O2lIQXpCVSxvQkFBb0I7cUhBQXBCLG9CQUFvQixjQUZuQixNQUFNOzJGQUVQLG9CQUFvQjtrQkFIaEMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFuZ3VsYXJGaXJlc3RvcmUgfSBmcm9tIFwiQGFuZ3VsYXIvZmlyZS9maXJlc3RvcmVcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVXNlcnNQYXltZW50UmVzb3VyY2Uge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZmlyZXN0b3JlOiBBbmd1bGFyRmlyZXN0b3JlLFxuICApIHt9XG5cbiAgZG9jKHVpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlyZXN0b3JlLmRvYyhgdXNlcnNQYXltZW50LyR7dWlkfWApO1xuICB9XG5cbiAgYXN5bmMgdXBkYXRlUGF5bWVudCh1aWQsIHBsYW4sIHJlcXVlc3QpIHtcbiAgICBsZXQgdXNlclBheW1lbnQ6IGFueSA9IChhd2FpdCB0aGlzLmRvYyh1aWQpLmdldCgpLnRvUHJvbWlzZSgpKS5kYXRhKCk7XG4gICAgaWYgKCF1c2VyUGF5bWVudCkge1xuICAgICAgdXNlclBheW1lbnQgPSB7XG4gICAgICAgIHVpZDogdWlkLFxuICAgICAgICBkYXRhOiBbXVxuICAgICAgfVxuICAgIH07XG4gICAgdXNlclBheW1lbnQuZGF0YS5wdXNoKHtcbiAgICAgIGRhdGU6IG1vbWVudCgpLmZvcm1hdCgnWVlZWS1NTS1ERCBISDptbTpzcycpLFxuICAgICAgcGF5bWVudElkOiByZXF1ZXN0WydwYXltZW50SWQnXSxcbiAgICAgIG9yZGVySWQ6IHJlcXVlc3RbJ29yZGVySWQnXSxcbiAgICAgIHBsYW5JZDogcGxhbi5pZCxcbiAgICB9KVxuICAgIHJldHVybiB0aGlzLmRvYyh1aWQpLnNldCh1c2VyUGF5bWVudCk7XG4gIH1cblxufVxuIl19
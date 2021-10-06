import { __awaiter } from "tslib";
import { Inject, Injectable } from "@angular/core";
import moment from "moment";
import { ngxFiteloConfig } from "../../tokens";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class OauthResource {
    constructor(config, httpClient) {
        this.config = config;
        this.httpClient = httpClient;
    }
    registerUser(credentials) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpClient.post(`${this.config.API_URL}/oauth/register`, credentials).toPromise();
        });
    }
    getUser(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            const ud = yield this.httpClient.get(`${this.config.API_URL}/users/${uid}`).toPromise();
            return ud;
        });
    }
    updateUser(uid, userDict) {
        return __awaiter(this, void 0, void 0, function* () {
            const ud = yield this.httpClient.post(`${this.config.API_URL}/oauth/updateuser/${uid}`, userDict).toPromise();
            return ud;
        });
    }
    updateSubscription(uid, plan, razorpay_payment_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const update = {
                subscription: {
                    planName: plan.name,
                    discount: plan.discount,
                    startdate: moment().format('YYYYMMDD'),
                    price: plan.price,
                    trasactionId: razorpay_payment_id
                },
                subscription_duration: plan.validity,
                // TODO: fix it
                subscription_endDate: moment().add(plan.validity, 'months').format('YYYYMMDD'),
                subscription_status: 'Existing',
            };
            const ud = this.httpClient.put(`${this.config.API_URL}/users/${uid}`, update).toPromise();
            return ud;
        });
    }
}
OauthResource.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: OauthResource, deps: [{ token: ngxFiteloConfig }, { token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
OauthResource.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: OauthResource, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: OauthResource, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [ngxFiteloConfig]
                }] }, { type: i1.HttpClient }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2F1dGgucmVzb3VyY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZml0ZWxvL3NyYy9saWIvcmVzb3VyY2VzL2FwaS9vYXV0aC5yZXNvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQzVCLE9BQU8sRUFBbUIsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7QUFLaEUsTUFBTSxPQUFPLGFBQWE7SUFFeEIsWUFDbUMsTUFBdUIsRUFDaEQsVUFBc0I7UUFERyxXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQUNoRCxlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQzdCLENBQUM7SUFFRSxZQUFZLENBQUMsV0FBVzs7WUFDNUIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxpQkFBaUIsRUFBRSxXQUFXLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQTtRQUMvRixDQUFDO0tBQUE7SUFFSyxPQUFPLENBQUMsR0FBVzs7WUFDdkIsTUFBTSxFQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxVQUFVLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUE7WUFDakcsT0FBTyxFQUFFLENBQUM7UUFDWixDQUFDO0tBQUE7SUFFSyxVQUFVLENBQUMsR0FBVyxFQUFFLFFBQWtCOztZQUM5QyxNQUFNLEVBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLHFCQUFxQixHQUFHLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUN4SCxPQUFPLEVBQUUsQ0FBQztRQUNaLENBQUM7S0FBQTtJQUVLLGtCQUFrQixDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsbUJBQW1COztZQUNyRCxNQUFNLE1BQU0sR0FBRztnQkFDYixZQUFZLEVBQUU7b0JBQ1osUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJO29CQUNuQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7b0JBQ3ZCLFNBQVMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO29CQUN0QyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7b0JBQ2pCLFlBQVksRUFBRSxtQkFBbUI7aUJBQ2xDO2dCQUNELHFCQUFxQixFQUFFLElBQUksQ0FBQyxRQUFRO2dCQUNwQyxlQUFlO2dCQUNmLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7Z0JBQzlFLG1CQUFtQixFQUFFLFVBQVU7YUFDaEMsQ0FBQTtZQUVELE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLFVBQVUsR0FBRyxFQUFFLEVBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUE7WUFDeEYsT0FBTyxFQUFFLENBQUM7UUFDWixDQUFDO0tBQUE7OzBHQXRDVSxhQUFhLGtCQUdkLGVBQWU7OEdBSGQsYUFBYSxjQUZaLE1BQU07MkZBRVAsYUFBYTtrQkFIekIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OzBCQUlJLE1BQU07MkJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBVc2VyRGljdCB9IGZyb20gXCJ0c3gtZml0ZWxvXCI7XG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcbmltcG9ydCB7IE5neEZpdGVsb0NvbmZpZywgbmd4Rml0ZWxvQ29uZmlnIH0gZnJvbSBcIi4uLy4uL3Rva2Vuc1wiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgT2F1dGhSZXNvdXJjZSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChuZ3hGaXRlbG9Db25maWcpIHByaXZhdGUgY29uZmlnOiBOZ3hGaXRlbG9Db25maWcsXG4gICAgcHJpdmF0ZSBodHRwQ2xpZW50OiBIdHRwQ2xpZW50LFxuICApIHt9XG5cbiAgYXN5bmMgcmVnaXN0ZXJVc2VyKGNyZWRlbnRpYWxzKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5wb3N0KGAke3RoaXMuY29uZmlnLkFQSV9VUkx9L29hdXRoL3JlZ2lzdGVyYCwgY3JlZGVudGlhbHMpLnRvUHJvbWlzZSgpXG4gIH1cblxuICBhc3luYyBnZXRVc2VyKHVpZDogc3RyaW5nKTogUHJvbWlzZTxVc2VyRGljdD4ge1xuICAgIGNvbnN0IHVkID0gYXdhaXQgdGhpcy5odHRwQ2xpZW50LmdldDxVc2VyRGljdD4oYCR7dGhpcy5jb25maWcuQVBJX1VSTH0vdXNlcnMvJHt1aWR9YCkudG9Qcm9taXNlKClcbiAgICByZXR1cm4gdWQ7XG4gIH1cblxuICBhc3luYyB1cGRhdGVVc2VyKHVpZDogc3RyaW5nLCB1c2VyRGljdDogVXNlckRpY3QpOiBQcm9taXNlPFVzZXJEaWN0PiB7XG4gICAgY29uc3QgdWQgPSBhd2FpdCB0aGlzLmh0dHBDbGllbnQucG9zdDxVc2VyRGljdD4oYCR7dGhpcy5jb25maWcuQVBJX1VSTH0vb2F1dGgvdXBkYXRldXNlci8ke3VpZH1gLCB1c2VyRGljdCkudG9Qcm9taXNlKCk7XG4gICAgcmV0dXJuIHVkO1xuICB9XG5cbiAgYXN5bmMgdXBkYXRlU3Vic2NyaXB0aW9uKHVpZCwgcGxhbiwgcmF6b3JwYXlfcGF5bWVudF9pZCkge1xuICAgIGNvbnN0IHVwZGF0ZSA9IHtcbiAgICAgIHN1YnNjcmlwdGlvbjoge1xuICAgICAgICBwbGFuTmFtZTogcGxhbi5uYW1lLFxuICAgICAgICBkaXNjb3VudDogcGxhbi5kaXNjb3VudCxcbiAgICAgICAgc3RhcnRkYXRlOiBtb21lbnQoKS5mb3JtYXQoJ1lZWVlNTUREJyksXG4gICAgICAgIHByaWNlOiBwbGFuLnByaWNlLFxuICAgICAgICB0cmFzYWN0aW9uSWQ6IHJhem9ycGF5X3BheW1lbnRfaWRcbiAgICAgIH0sXG4gICAgICBzdWJzY3JpcHRpb25fZHVyYXRpb246IHBsYW4udmFsaWRpdHksXG4gICAgICAvLyBUT0RPOiBmaXggaXRcbiAgICAgIHN1YnNjcmlwdGlvbl9lbmREYXRlOiBtb21lbnQoKS5hZGQocGxhbi52YWxpZGl0eSwgJ21vbnRocycpLmZvcm1hdCgnWVlZWU1NREQnKSxcbiAgICAgIHN1YnNjcmlwdGlvbl9zdGF0dXM6ICdFeGlzdGluZycsXG4gICAgfVxuXG4gICAgY29uc3QgdWQgPSB0aGlzLmh0dHBDbGllbnQucHV0KGAke3RoaXMuY29uZmlnLkFQSV9VUkx9L3VzZXJzLyR7dWlkfWAsdXBkYXRlKS50b1Byb21pc2UoKVxuICAgIHJldHVybiB1ZDtcbiAgfVxuXG5cbn1cbiJdfQ==
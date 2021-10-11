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
    forgotPassword(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpClient.post(`${this.config.API_URL}/oauth/forgot-password`, { email: email }).toPromise();
        });
    }
    resetPassword(email, code, password) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpClient.post(`${this.config.API_URL}/oauth/reset-password`, { email: email, code: code, password: password }).toPromise();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2F1dGgucmVzb3VyY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZml0ZWxvL3NyYy9saWIvcmVzb3VyY2VzL2FwaS9vYXV0aC5yZXNvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQzVCLE9BQU8sRUFBbUIsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7QUFLaEUsTUFBTSxPQUFPLGFBQWE7SUFFeEIsWUFDbUMsTUFBdUIsRUFDaEQsVUFBc0I7UUFERyxXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQUNoRCxlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQzdCLENBQUM7SUFFRSxZQUFZLENBQUMsV0FBVzs7WUFDNUIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxpQkFBaUIsRUFBRSxXQUFXLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQTtRQUMvRixDQUFDO0tBQUE7SUFFSyxPQUFPLENBQUMsR0FBVzs7WUFDdkIsTUFBTSxFQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxVQUFVLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUE7WUFDakcsT0FBTyxFQUFFLENBQUM7UUFDWixDQUFDO0tBQUE7SUFFSyxVQUFVLENBQUMsR0FBVyxFQUFFLFFBQWtCOztZQUM5QyxNQUFNLEVBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLHFCQUFxQixHQUFHLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUN4SCxPQUFPLEVBQUUsQ0FBQztRQUNaLENBQUM7S0FBQTtJQUVLLGtCQUFrQixDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsbUJBQW1COztZQUNyRCxNQUFNLE1BQU0sR0FBRztnQkFDYixZQUFZLEVBQUU7b0JBQ1osUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJO29CQUNuQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7b0JBQ3ZCLFNBQVMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO29CQUN0QyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7b0JBQ2pCLFlBQVksRUFBRSxtQkFBbUI7aUJBQ2xDO2dCQUNELHFCQUFxQixFQUFFLElBQUksQ0FBQyxRQUFRO2dCQUNwQyxlQUFlO2dCQUNmLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7Z0JBQzlFLG1CQUFtQixFQUFFLFVBQVU7YUFDaEMsQ0FBQTtZQUVELE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLFVBQVUsR0FBRyxFQUFFLEVBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUE7WUFDeEYsT0FBTyxFQUFFLENBQUM7UUFDWixDQUFDO0tBQUE7SUFFSyxjQUFjLENBQUMsS0FBYTs7WUFDaEMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyx3QkFBd0IsRUFBQyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3pHLENBQUM7S0FBQTtJQUVLLGFBQWEsQ0FBQyxLQUFhLEVBQUUsSUFBWSxFQUFFLFFBQWdCOztZQUMvRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLHVCQUF1QixFQUFDLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3hJLENBQUM7S0FBQTs7MEdBOUNVLGFBQWEsa0JBR2QsZUFBZTs4R0FIZCxhQUFhLGNBRlosTUFBTTsyRkFFUCxhQUFhO2tCQUh6QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7MEJBSUksTUFBTTsyQkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFVzZXJEaWN0IH0gZnJvbSBcInRzeC1maXRlbG9cIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IHsgTmd4Rml0ZWxvQ29uZmlnLCBuZ3hGaXRlbG9Db25maWcgfSBmcm9tIFwiLi4vLi4vdG9rZW5zXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBPYXV0aFJlc291cmNlIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KG5neEZpdGVsb0NvbmZpZykgcHJpdmF0ZSBjb25maWc6IE5neEZpdGVsb0NvbmZpZyxcbiAgICBwcml2YXRlIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQsXG4gICkge31cblxuICBhc3luYyByZWdpc3RlclVzZXIoY3JlZGVudGlhbHMpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LnBvc3QoYCR7dGhpcy5jb25maWcuQVBJX1VSTH0vb2F1dGgvcmVnaXN0ZXJgLCBjcmVkZW50aWFscykudG9Qcm9taXNlKClcbiAgfVxuXG4gIGFzeW5jIGdldFVzZXIodWlkOiBzdHJpbmcpOiBQcm9taXNlPFVzZXJEaWN0PiB7XG4gICAgY29uc3QgdWQgPSBhd2FpdCB0aGlzLmh0dHBDbGllbnQuZ2V0PFVzZXJEaWN0PihgJHt0aGlzLmNvbmZpZy5BUElfVVJMfS91c2Vycy8ke3VpZH1gKS50b1Byb21pc2UoKVxuICAgIHJldHVybiB1ZDtcbiAgfVxuXG4gIGFzeW5jIHVwZGF0ZVVzZXIodWlkOiBzdHJpbmcsIHVzZXJEaWN0OiBVc2VyRGljdCk6IFByb21pc2U8VXNlckRpY3Q+IHtcbiAgICBjb25zdCB1ZCA9IGF3YWl0IHRoaXMuaHR0cENsaWVudC5wb3N0PFVzZXJEaWN0PihgJHt0aGlzLmNvbmZpZy5BUElfVVJMfS9vYXV0aC91cGRhdGV1c2VyLyR7dWlkfWAsIHVzZXJEaWN0KS50b1Byb21pc2UoKTtcbiAgICByZXR1cm4gdWQ7XG4gIH1cblxuICBhc3luYyB1cGRhdGVTdWJzY3JpcHRpb24odWlkLCBwbGFuLCByYXpvcnBheV9wYXltZW50X2lkKSB7XG4gICAgY29uc3QgdXBkYXRlID0ge1xuICAgICAgc3Vic2NyaXB0aW9uOiB7XG4gICAgICAgIHBsYW5OYW1lOiBwbGFuLm5hbWUsXG4gICAgICAgIGRpc2NvdW50OiBwbGFuLmRpc2NvdW50LFxuICAgICAgICBzdGFydGRhdGU6IG1vbWVudCgpLmZvcm1hdCgnWVlZWU1NREQnKSxcbiAgICAgICAgcHJpY2U6IHBsYW4ucHJpY2UsXG4gICAgICAgIHRyYXNhY3Rpb25JZDogcmF6b3JwYXlfcGF5bWVudF9pZFxuICAgICAgfSxcbiAgICAgIHN1YnNjcmlwdGlvbl9kdXJhdGlvbjogcGxhbi52YWxpZGl0eSxcbiAgICAgIC8vIFRPRE86IGZpeCBpdFxuICAgICAgc3Vic2NyaXB0aW9uX2VuZERhdGU6IG1vbWVudCgpLmFkZChwbGFuLnZhbGlkaXR5LCAnbW9udGhzJykuZm9ybWF0KCdZWVlZTU1ERCcpLFxuICAgICAgc3Vic2NyaXB0aW9uX3N0YXR1czogJ0V4aXN0aW5nJyxcbiAgICB9XG5cbiAgICBjb25zdCB1ZCA9IHRoaXMuaHR0cENsaWVudC5wdXQoYCR7dGhpcy5jb25maWcuQVBJX1VSTH0vdXNlcnMvJHt1aWR9YCx1cGRhdGUpLnRvUHJvbWlzZSgpXG4gICAgcmV0dXJuIHVkO1xuICB9XG5cbiAgYXN5bmMgZm9yZ290UGFzc3dvcmQoZW1haWw6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQucG9zdChgJHt0aGlzLmNvbmZpZy5BUElfVVJMfS9vYXV0aC9mb3Jnb3QtcGFzc3dvcmRgLHtlbWFpbDogZW1haWx9KS50b1Byb21pc2UoKTtcbiAgfVxuXG4gIGFzeW5jIHJlc2V0UGFzc3dvcmQoZW1haWw6IHN0cmluZywgY29kZTogbnVtYmVyLCBwYXNzd29yZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5wb3N0KGAke3RoaXMuY29uZmlnLkFQSV9VUkx9L29hdXRoL3Jlc2V0LXBhc3N3b3JkYCx7ZW1haWw6IGVtYWlsLCBjb2RlOiBjb2RlLCBwYXNzd29yZDogcGFzc3dvcmR9KS50b1Byb21pc2UoKTtcbiAgfVxuXG59XG4iXX0=
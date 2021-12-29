import { __awaiter } from "tslib";
import { HttpHeaders, HttpParams } from "@angular/common/http";
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
    getUser(accessToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const ud = yield this.httpClient.get(`${this.config.API_URL}/oauth/self`, { headers: { 'accesstoken': accessToken } }).toPromise();
            return ud;
        });
    }
    updateUser(accessToken, userDict) {
        return __awaiter(this, void 0, void 0, function* () {
            const ud = yield this.httpClient.post(`${this.config.API_URL}/oauth/updateuser`, userDict, { headers: { 'accesstoken': accessToken } }).toPromise();
            return ud;
        });
    }
    updateSubscription(accessToken, plan, razorpay_payment_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const update = {
                subscription: {
                    planName: plan.name,
                    discount: plan.discount,
                    startDate: moment().format('YYYYMMDD'),
                    price: plan.price,
                    transactionId: razorpay_payment_id
                },
                subscription_duration: plan.validity,
                // TODO: fix it
                subscription_endDate: moment().add(plan.validity, 'months').format('YYYYMMDD'),
                subscription_status: 'Existing',
            };
            const ud = this.httpClient.put(`${this.config.API_URL}/oauth/subscription`, update, { headers: { 'accesstoken': accessToken } }).toPromise();
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
    getRoutine(accessToken, id, date) {
        return __awaiter(this, void 0, void 0, function* () {
            let data;
            try {
                data = yield this.httpClient.get(`${this.config.API_URL}/oauth/routines/${id}/${date}`, { headers: { 'accesstoken': accessToken } }).toPromise();
            }
            catch (e) {
                data = null;
            }
            return data;
        });
    }
    updateRoutine(accessToken, userId, date, mealId, value) {
        return __awaiter(this, void 0, void 0, function* () {
            date = moment(date).format('YYYY-MM-DD');
            const httpOptions = {
                headers: new HttpHeaders({
                    'Content-Type': 'text/plain',
                    'accesstoken': accessToken
                })
            };
            const url = `${this.config.API_URL}/oauth/routines/${userId}/${date}/mealtaken/${mealId}`;
            return this.httpClient.put(url, value, httpOptions).toPromise();
        });
    }
    getGroceries(accessToken, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let fiterparam = new HttpParams().set('filters', JSON.stringify(this.getFilersArray()));
            const res = yield this.httpClient.get(`${this.config.API_URL}/oauth/routines/${userId}`, { params: fiterparam, headers: { 'accesstoken': accessToken } }).toPromise();
            let routine = res.data;
            let newgroceriesDict = {};
            routine.forEach((val) => {
                val.mealDicts.forEach((meal) => {
                    meal.recipeDicts.forEach((recipe) => {
                        if (recipe.groceryDicts) {
                            recipe.groceryDicts.forEach((grocery) => {
                                newgroceriesDict[grocery.id] = grocery;
                            });
                        }
                    });
                });
            });
            return Object.values(newgroceriesDict);
        });
    }
    getFilersArray() {
        const today = moment().format("YYYYMMDD");
        let filersArray = [
            {
                "field": "date",
                "operator": ">=",
                "value": today,
            },
            {
                "field": "date",
                "operator": "<=",
                "value": moment().add(7, 'day').format("YYYYMMDD")
            }
        ];
        return filersArray;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2F1dGgucmVzb3VyY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZml0ZWxvL3NyYy9saWIvcmVzb3VyY2VzL2FwaS9vYXV0aC5yZXNvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFjLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRCxPQUFPLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxFQUFtQixlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7OztBQUtoRSxNQUFNLE9BQU8sYUFBYTtJQUV4QixZQUNtQyxNQUF1QixFQUNoRCxVQUFzQjtRQURHLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBQ2hELGVBQVUsR0FBVixVQUFVLENBQVk7SUFDN0IsQ0FBQztJQUVFLFlBQVksQ0FBQyxXQUFXOztZQUM1QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLGlCQUFpQixFQUFFLFdBQVcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBQy9GLENBQUM7S0FBQTtJQUVLLE9BQU8sQ0FBQyxXQUFtQjs7WUFDL0IsTUFBTSxFQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxhQUFhLEVBQUUsRUFBQyxPQUFPLEVBQUUsRUFBQyxhQUFhLEVBQUUsV0FBVyxFQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFBO1lBQ3hJLE9BQU8sRUFBRSxDQUFDO1FBQ1osQ0FBQztLQUFBO0lBRUssVUFBVSxDQUFDLFdBQW1CLEVBQUUsUUFBa0I7O1lBQ3RELE1BQU0sRUFBRSxHQUFHLE1BQU0sSUFB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dEMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQzs0QkFDekMsQ0FBQyxDQUFDLENBQUE7eUJBQ0g7b0JBQ0gsQ0FBQyxDQUFDLENBQUE7Z0JBQ0osQ0FBQyxDQUFDLENBQUE7WUFDSixDQUFDLENBQUMsQ0FBQTtZQUVGLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3pDLENBQUM7S0FBQTtJQUVELGNBQWM7UUFDWixNQUFNLEtBQUssR0FBRyxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFMUMsSUFBSSxXQUFXLEdBQUc7WUFDaEI7Z0JBQ0UsT0FBTyxFQUFFLE1BQU07Z0JBQ2YsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLE9BQU8sRUFBRSxLQUFLO2FBQ2Y7WUFDRDtnQkFDRSxPQUFPLEVBQUUsTUFBTTtnQkFDZixVQUFVLEVBQUUsSUFBSTtnQkFDaEIsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQzthQUNsRDtTQUNGLENBQUE7UUFFRCxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDOzswR0E3R1UsYUFBYSxrQkFHZCxlQUFlOzhHQUhkLGFBQWEsY0FGWixNQUFNOzJGQUVQLGFBQWE7a0JBSHpCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzswQkFJSSxNQUFNOzJCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRpbmVEaWN0LCBVc2VyRGljdCB9IGZyb20gXCJ0c3gtZml0ZWxvXCI7XG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcbmltcG9ydCB7IE5neEZpdGVsb0NvbmZpZywgbmd4Rml0ZWxvQ29uZmlnIH0gZnJvbSBcIi4uLy4uL3Rva2Vuc1wiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgT2F1dGhSZXNvdXJjZSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChuZ3hGaXRlbG9Db25maWcpIHByaXZhdGUgY29uZmlnOiBOZ3hGaXRlbG9Db25maWcsXG4gICAgcHJpdmF0ZSBodHRwQ2xpZW50OiBIdHRwQ2xpZW50LFxuICApIHt9XG5cbiAgYXN5bmMgcmVnaXN0ZXJVc2VyKGNyZWRlbnRpYWxzKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5wb3N0KGAke3RoaXMuY29uZmlnLkFQSV9VUkx9L29hdXRoL3JlZ2lzdGVyYCwgY3JlZGVudGlhbHMpLnRvUHJvbWlzZSgpXG4gIH1cblxuICBhc3luYyBnZXRVc2VyKGFjY2Vzc1Rva2VuOiBzdHJpbmcpOiBQcm9taXNlPFVzZXJEaWN0PiB7XG4gICAgY29uc3QgdWQgPSBhd2FpdCB0aGlzLmh0dHBDbGllbnQuZ2V0PFVzZXJEaWN0PihgJHt0aGlzLmNvbmZpZy5BUElfVVJMfS9vYXV0aC9zZWxmYCwge2hlYWRlcnM6IHsnYWNjZXNzdG9rZW4nOiBhY2Nlc3NUb2tlbn19KS50b1Byb21pc2UoKVxuICAgIHJldHVybiB1ZDtcbiAgfVxuXG4gIGFzeW5jIHVwZGF0ZVVzZXIoYWNjZXNzVG9rZW46IHN0cmluZywgdXNlckRpY3Q6IFVzZXJEaWN0KTogUHJvbWlzZTxVc2VyRGljdD4ge1xuICAgIGNvbnN0IHVkID0gYXdhaXQgdGhpcy5odHRwQ2xpZW50LnBvc3Q8VXNlckRpY3Q+KGAke3RoaXMuY29uZmlnLkFQSV9VUkx9L29hdXRoL3VwZGF0ZXVzZXJgLCB1c2VyRGljdCwge2hlYWRlcnM6IHsnYWNjZXNzdG9rZW4nOiBhY2Nlc3NUb2tlbn19KS50b1Byb21pc2UoKTtcbiAgICByZXR1cm4gdWQ7XG4gIH1cblxuICBhc3luYyB1cGRhdGVTdWJzY3JpcHRpb24oYWNjZXNzVG9rZW46IHN0cmluZywgcGxhbiwgcmF6b3JwYXlfcGF5bWVudF9pZCkge1xuICAgIGNvbnN0IHVwZGF0ZSA9IHtcbiAgICAgIHN1YnNjcmlwdGlvbjoge1xuICAgICAgICBwbGFuTmFtZTogcGxhbi5uYW1lLFxuICAgICAgICBkaXNjb3VudDogcGxhbi5kaXNjb3VudCxcbiAgICAgICAgc3RhcnREYXRlOiBtb21lbnQoKS5mb3JtYXQoJ1lZWVlNTUREJyksXG4gICAgICAgIHByaWNlOiBwbGFuLnByaWNlLFxuICAgICAgICB0cmFuc2FjdGlvbklkOiByYXpvcnBheV9wYXltZW50X2lkXG4gICAgICB9LFxuICAgICAgc3Vic2NyaXB0aW9uX2R1cmF0aW9uOiBwbGFuLnZhbGlkaXR5LFxuICAgICAgLy8gVE9ETzogZml4IGl0XG4gICAgICBzdWJzY3JpcHRpb25fZW5kRGF0ZTogbW9tZW50KCkuYWRkKHBsYW4udmFsaWRpdHksICdtb250aHMnKS5mb3JtYXQoJ1lZWVlNTUREJyksXG4gICAgICBzdWJzY3JpcHRpb25fc3RhdHVzOiAnRXhpc3RpbmcnLFxuICAgIH1cblxuICAgIGNvbnN0IHVkID0gdGhpcy5odHRwQ2xpZW50LnB1dChgJHt0aGlzLmNvbmZpZy5BUElfVVJMfS9vYXV0aC9zdWJzY3JpcHRpb25gLHVwZGF0ZSwge2hlYWRlcnM6IHsnYWNjZXNzdG9rZW4nOiBhY2Nlc3NUb2tlbn19KS50b1Byb21pc2UoKVxuICAgIHJldHVybiB1ZDtcbiAgfVxuXG4gIGFzeW5jIGZvcmdvdFBhc3N3b3JkKGVtYWlsOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LnBvc3QoYCR7dGhpcy5jb25maWcuQVBJX1VSTH0vb2F1dGgvZm9yZ290LXBhc3N3b3JkYCx7ZW1haWw6IGVtYWlsfSkudG9Qcm9taXNlKCk7XG4gIH1cblxuICBhc3luYyByZXNldFBhc3N3b3JkKGVtYWlsOiBzdHJpbmcsIGNvZGU6IG51bWJlciwgcGFzc3dvcmQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQucG9zdChgJHt0aGlzLmNvbmZpZy5BUElfVVJMfS9vYXV0aC9yZXNldC1wYXNzd29yZGAse2VtYWlsOiBlbWFpbCwgY29kZTogY29kZSwgcGFzc3dvcmQ6IHBhc3N3b3JkfSkudG9Qcm9taXNlKCk7XG4gIH1cblxuICBhc3luYyBnZXRSb3V0aW5lKGFjY2Vzc1Rva2VuOiBzdHJpbmcsIGlkOiBudW1iZXIsIGRhdGUpIHtcbiAgICBsZXQgZGF0YTtcbiAgICB0cnkge1xuICAgICAgZGF0YSA9IGF3YWl0IHRoaXMuaHR0cENsaWVudC5nZXQ8Um91dGluZURpY3Q+KGAke3RoaXMuY29uZmlnLkFQSV9VUkx9L29hdXRoL3JvdXRpbmVzLyR7aWR9LyR7ZGF0ZX1gLCB7aGVhZGVyczogeydhY2Nlc3N0b2tlbic6IGFjY2Vzc1Rva2VufX0pLnRvUHJvbWlzZSgpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgZGF0YSA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgYXN5bmMgdXBkYXRlUm91dGluZShhY2Nlc3NUb2tlbjogc3RyaW5nLCB1c2VySWQ6IG51bWJlciwgZGF0ZTogc3RyaW5nLCBtZWFsSWQ6IG51bWJlciwgdmFsdWU6IGJvb2xlYW4pIHtcbiAgICBkYXRlID0gbW9tZW50KGRhdGUpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICAndGV4dC9wbGFpbicsXG4gICAgICAgICdhY2Nlc3N0b2tlbic6IGFjY2Vzc1Rva2VuXG4gICAgICB9KVxuICAgIH1cbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmNvbmZpZy5BUElfVVJMfS9vYXV0aC9yb3V0aW5lcy8ke3VzZXJJZH0vJHtkYXRlfS9tZWFsdGFrZW4vJHttZWFsSWR9YDtcbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LnB1dCh1cmwsIHZhbHVlLCBodHRwT3B0aW9ucykudG9Qcm9taXNlKCk7XG4gIH1cblxuICBhc3luYyBnZXRHcm9jZXJpZXMoYWNjZXNzVG9rZW46IHN0cmluZywgdXNlcklkOiBudW1iZXIpIHtcbiAgICBsZXQgZml0ZXJwYXJhbSA9IG5ldyBIdHRwUGFyYW1zKCkuc2V0KCdmaWx0ZXJzJywgSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRGaWxlcnNBcnJheSgpKSk7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5odHRwQ2xpZW50LmdldDxSb3V0aW5lcz4oYCR7dGhpcy5jb25maWcuQVBJX1VSTH0vb2F1dGgvcm91dGluZXMvJHt1c2VySWR9YCx7cGFyYW1zOiBmaXRlcnBhcmFtLCBoZWFkZXJzOiB7J2FjY2Vzc3Rva2VuJzogYWNjZXNzVG9rZW59fSkudG9Qcm9taXNlKCk7XG5cbiAgICBsZXQgcm91dGluZTogYW55ID0gcmVzLmRhdGFcbiAgICBsZXQgbmV3Z3JvY2VyaWVzRGljdDogYW55ID0ge307XG4gICAgcm91dGluZS5mb3JFYWNoKCh2YWwpID0+IHtcbiAgICAgIHZhbC5tZWFsRGljdHMuZm9yRWFjaCgobWVhbCkgPT4ge1xuICAgICAgICBtZWFsLnJlY2lwZURpY3RzLmZvckVhY2goKHJlY2lwZSkgPT4ge1xuICAgICAgICAgIGlmKHJlY2lwZS5ncm9jZXJ5RGljdHMpIHtcbiAgICAgICAgICAgIHJlY2lwZS5ncm9jZXJ5RGljdHMuZm9yRWFjaCgoZ3JvY2VyeSkgPT4ge1xuICAgICAgICAgICAgICBuZXdncm9jZXJpZXNEaWN0W2dyb2NlcnkuaWRdID0gZ3JvY2VyeTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMobmV3Z3JvY2VyaWVzRGljdCk7XG4gIH1cblxuICBnZXRGaWxlcnNBcnJheSgpIHtcbiAgICBjb25zdCB0b2RheSA9IG1vbWVudCgpLmZvcm1hdChcIllZWVlNTUREXCIpO1xuXG4gICAgbGV0IGZpbGVyc0FycmF5ID0gW1xuICAgICAge1xuICAgICAgICBcImZpZWxkXCI6IFwiZGF0ZVwiLFxuICAgICAgICBcIm9wZXJhdG9yXCI6IFwiPj1cIixcbiAgICAgICAgXCJ2YWx1ZVwiOiB0b2RheSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiZmllbGRcIjogXCJkYXRlXCIsXG4gICAgICAgIFwib3BlcmF0b3JcIjogXCI8PVwiLFxuICAgICAgICBcInZhbHVlXCI6IG1vbWVudCgpLmFkZCg3LCdkYXknKS5mb3JtYXQoXCJZWVlZTU1ERFwiKVxuICAgICAgfVxuICAgIF1cblxuICAgIHJldHVybiBmaWxlcnNBcnJheTtcbiAgfVxuXG59XG5cbmludGVyZmFjZSBSb3V0aW5lcyB7XG4gIGRhdGE/OiBSb3V0aW5lRGljdFtdLFxuICBwYWdpbmc/OiBhbnlcbn1cbiJdfQ==
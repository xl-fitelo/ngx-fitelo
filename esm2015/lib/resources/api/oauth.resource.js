import { __awaiter } from "tslib";
import { HttpParams } from "@angular/common/http";
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
            const url = `${this.config.API_URL}/oauth/routines/${userId}/${date}/mealtaken/${mealId}`;
            return this.httpClient.put(url, { mealTaken: value }, { headers: { 'accesstoken': accessToken } }).toPromise();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2F1dGgucmVzb3VyY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZml0ZWxvL3NyYy9saWIvcmVzb3VyY2VzL2FwaS9vYXV0aC5yZXNvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUEyQixVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRCxPQUFPLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxFQUFtQixlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7OztBQUtoRSxNQUFNLE9BQU8sYUFBYTtJQUV4QixZQUNtQyxNQUF1QixFQUNoRCxVQUFzQjtRQURHLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBQ2hELGVBQVUsR0FBVixVQUFVLENBQVk7SUFDN0IsQ0FBQztJQUVFLFlBQVksQ0FBQyxXQUFXOztZQUM1QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLGlCQUFpQixFQUFFLFdBQVcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBQy9GLENBQUM7S0FBQTtJQUVLLE9BQU8sQ0FBQyxXQUFtQjs7WUFDL0IsTUFBTSxFQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxhQUFhLEVBQUUsRUFBQyxPQUFPLEVBQUUsRUFBQyxhQUFhLEVBQUUsV0FBVyxFQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFBO1lBQ3hJLE9BQU8sRUFBRSxDQUFDO1FBQ1osQ0FBQztLQUFBO0lBRUssVUFBVSxDQUFDLFdBQW1CLEVBQUUsUUFBa0I7O1lBQ3RELE1BQU0sRUFBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLFVB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LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRpbmVEaWN0LCBVc2VyRGljdCB9IGZyb20gXCJ0c3gtZml0ZWxvXCI7XG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcbmltcG9ydCB7IE5neEZpdGVsb0NvbmZpZywgbmd4Rml0ZWxvQ29uZmlnIH0gZnJvbSBcIi4uLy4uL3Rva2Vuc1wiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgT2F1dGhSZXNvdXJjZSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChuZ3hGaXRlbG9Db25maWcpIHByaXZhdGUgY29uZmlnOiBOZ3hGaXRlbG9Db25maWcsXG4gICAgcHJpdmF0ZSBodHRwQ2xpZW50OiBIdHRwQ2xpZW50LFxuICApIHt9XG5cbiAgYXN5bmMgcmVnaXN0ZXJVc2VyKGNyZWRlbnRpYWxzKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5wb3N0KGAke3RoaXMuY29uZmlnLkFQSV9VUkx9L29hdXRoL3JlZ2lzdGVyYCwgY3JlZGVudGlhbHMpLnRvUHJvbWlzZSgpXG4gIH1cblxuICBhc3luYyBnZXRVc2VyKGFjY2Vzc1Rva2VuOiBzdHJpbmcpOiBQcm9taXNlPFVzZXJEaWN0PiB7XG4gICAgY29uc3QgdWQgPSBhd2FpdCB0aGlzLmh0dHBDbGllbnQuZ2V0PFVzZXJEaWN0PihgJHt0aGlzLmNvbmZpZy5BUElfVVJMfS9vYXV0aC9zZWxmYCwge2hlYWRlcnM6IHsnYWNjZXNzdG9rZW4nOiBhY2Nlc3NUb2tlbn19KS50b1Byb21pc2UoKVxuICAgIHJldHVybiB1ZDtcbiAgfVxuXG4gIGFzeW5jIHVwZGF0ZVVzZXIoYWNjZXNzVG9rZW46IHN0cmluZywgdXNlckRpY3Q6IFVzZXJEaWN0KTogUHJvbWlzZTxVc2VyRGljdD4ge1xuICAgIGNvbnN0IHVkID0gYXdhaXQgdGhpcy5odHRwQ2xpZW50LnBvc3Q8VXNlckRpY3Q+KGAke3RoaXMuY29uZmlnLkFQSV9VUkx9L29hdXRoL3VwZGF0ZXVzZXJgLCB1c2VyRGljdCwge2hlYWRlcnM6IHsnYWNjZXNzdG9rZW4nOiBhY2Nlc3NUb2tlbn19KS50b1Byb21pc2UoKTtcbiAgICByZXR1cm4gdWQ7XG4gIH1cblxuICBhc3luYyBmb3Jnb3RQYXNzd29yZChlbWFpbDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5wb3N0KGAke3RoaXMuY29uZmlnLkFQSV9VUkx9L29hdXRoL2ZvcmdvdC1wYXNzd29yZGAse2VtYWlsOiBlbWFpbH0pLnRvUHJvbWlzZSgpO1xuICB9XG5cbiAgYXN5bmMgcmVzZXRQYXNzd29yZChlbWFpbDogc3RyaW5nLCBjb2RlOiBudW1iZXIsIHBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LnBvc3QoYCR7dGhpcy5jb25maWcuQVBJX1VSTH0vb2F1dGgvcmVzZXQtcGFzc3dvcmRgLHtlbWFpbDogZW1haWwsIGNvZGU6IGNvZGUsIHBhc3N3b3JkOiBwYXNzd29yZH0pLnRvUHJvbWlzZSgpO1xuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGluZShhY2Nlc3NUb2tlbjogc3RyaW5nLCBpZDogbnVtYmVyLCBkYXRlKSB7XG4gICAgbGV0IGRhdGE7XG4gICAgdHJ5IHtcbiAgICAgIGRhdGEgPSBhd2FpdCB0aGlzLmh0dHBDbGllbnQuZ2V0PFJvdXRpbmVEaWN0PihgJHt0aGlzLmNvbmZpZy5BUElfVVJMfS9vYXV0aC9yb3V0aW5lcy8ke2lkfS8ke2RhdGV9YCwge2hlYWRlcnM6IHsnYWNjZXNzdG9rZW4nOiBhY2Nlc3NUb2tlbn19KS50b1Byb21pc2UoKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgIGRhdGEgPSBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGFzeW5jIHVwZGF0ZVJvdXRpbmUoYWNjZXNzVG9rZW46IHN0cmluZywgdXNlcklkOiBudW1iZXIsIGRhdGU6IHN0cmluZywgbWVhbElkOiBudW1iZXIsIHZhbHVlOiBib29sZWFuKSB7XG4gICAgZGF0ZSA9IG1vbWVudChkYXRlKS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmNvbmZpZy5BUElfVVJMfS9vYXV0aC9yb3V0aW5lcy8ke3VzZXJJZH0vJHtkYXRlfS9tZWFsdGFrZW4vJHttZWFsSWR9YDtcbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LnB1dCh1cmwsIHttZWFsVGFrZW46IHZhbHVlfSwge2hlYWRlcnM6IHsnYWNjZXNzdG9rZW4nOiBhY2Nlc3NUb2tlbn19KS50b1Byb21pc2UoKTtcbiAgfVxuXG4gIGFzeW5jIGdldEdyb2NlcmllcyhhY2Nlc3NUb2tlbjogc3RyaW5nLCB1c2VySWQ6IG51bWJlcikge1xuICAgIGxldCBmaXRlcnBhcmFtID0gbmV3IEh0dHBQYXJhbXMoKS5zZXQoJ2ZpbHRlcnMnLCBKU09OLnN0cmluZ2lmeSh0aGlzLmdldEZpbGVyc0FycmF5KCkpKTtcbiAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLmh0dHBDbGllbnQuZ2V0PFJvdXRpbmVzPihgJHt0aGlzLmNvbmZpZy5BUElfVVJMfS9vYXV0aC9yb3V0aW5lcy8ke3VzZXJJZH1gLHtwYXJhbXM6IGZpdGVycGFyYW0sIGhlYWRlcnM6IHsnYWNjZXNzdG9rZW4nOiBhY2Nlc3NUb2tlbn19KS50b1Byb21pc2UoKTtcblxuICAgIGxldCByb3V0aW5lOiBhbnkgPSByZXMuZGF0YVxuICAgIGxldCBuZXdncm9jZXJpZXNEaWN0OiBhbnkgPSB7fTtcbiAgICByb3V0aW5lLmZvckVhY2goKHZhbCkgPT4ge1xuICAgICAgdmFsLm1lYWxEaWN0cy5mb3JFYWNoKChtZWFsKSA9PiB7XG4gICAgICAgIG1lYWwucmVjaXBlRGljdHMuZm9yRWFjaCgocmVjaXBlKSA9PiB7XG4gICAgICAgICAgaWYocmVjaXBlLmdyb2NlcnlEaWN0cykge1xuICAgICAgICAgICAgcmVjaXBlLmdyb2NlcnlEaWN0cy5mb3JFYWNoKChncm9jZXJ5KSA9PiB7XG4gICAgICAgICAgICAgIG5ld2dyb2Nlcmllc0RpY3RbZ3JvY2VyeS5pZF0gPSBncm9jZXJ5O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhuZXdncm9jZXJpZXNEaWN0KTtcbiAgfVxuXG4gIGdldEZpbGVyc0FycmF5KCkge1xuICAgIGNvbnN0IHRvZGF5ID0gbW9tZW50KCkuZm9ybWF0KFwiWVlZWU1NRERcIik7XG5cbiAgICBsZXQgZmlsZXJzQXJyYXkgPSBbXG4gICAgICB7XG4gICAgICAgIFwiZmllbGRcIjogXCJkYXRlXCIsXG4gICAgICAgIFwib3BlcmF0b3JcIjogXCI+PVwiLFxuICAgICAgICBcInZhbHVlXCI6IHRvZGF5LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJmaWVsZFwiOiBcImRhdGVcIixcbiAgICAgICAgXCJvcGVyYXRvclwiOiBcIjw9XCIsXG4gICAgICAgIFwidmFsdWVcIjogbW9tZW50KCkuYWRkKDcsJ2RheScpLmZvcm1hdChcIllZWVlNTUREXCIpXG4gICAgICB9XG4gICAgXVxuXG4gICAgcmV0dXJuIGZpbGVyc0FycmF5O1xuICB9XG5cbn1cblxuaW50ZXJmYWNlIFJvdXRpbmVzIHtcbiAgZGF0YT86IFJvdXRpbmVEaWN0W10sXG4gIHBhZ2luZz86IGFueVxufVxuIl19
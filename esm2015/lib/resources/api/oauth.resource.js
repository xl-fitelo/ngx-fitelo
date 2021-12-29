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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2F1dGgucmVzb3VyY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZml0ZWxvL3NyYy9saWIvcmVzb3VyY2VzL2FwaS9vYXV0aC5yZXNvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFjLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRCxPQUFPLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxFQUFtQixlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7OztBQUtoRSxNQUFNLE9BQU8sYUFBYTtJQUV4QixZQUNtQyxNQUF1QixFQUNoRCxVQUFzQjtRQURHLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBQ2hELGVBQVUsR0FBVixVQUFVLENBQVk7SUFDN0IsQ0FBQztJQUVFLFlBQVksQ0FBQyxXQUFXOztZQUM1QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLGlCQUFpQixFQUFFLFdBQVcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBQy9GLENBQUM7S0FBQTtJQUVLLE9BQU8sQ0FBQyxXQUFtQjs7WUFDL0IsTUFBTSxFQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxhQUFhLEVBQUUsRUFBQyxPQUFPLEVBQUUsRUFBQyxhQUFhLEVBQUUsV0FBVyxFQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFBO1lBQ3hJLE9BQU8sRUFBRSxDQUFDO1FBQ1osQ0FBQztLQUFBO0lBRUssVUFBVSxDQUFDLFdBQW1CLEVBQUUsUUFBa0I7O1lBQ3RELE1BQU0sRUFBRSxHQUFHLE1BQU0sSUFB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QUNuQjs7MEJBSUksTUFBTTsyQkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0aW5lRGljdCwgVXNlckRpY3QgfSBmcm9tIFwidHN4LWZpdGVsb1wiO1xuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5pbXBvcnQgeyBOZ3hGaXRlbG9Db25maWcsIG5neEZpdGVsb0NvbmZpZyB9IGZyb20gXCIuLi8uLi90b2tlbnNcIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE9hdXRoUmVzb3VyY2Uge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3Qobmd4Rml0ZWxvQ29uZmlnKSBwcml2YXRlIGNvbmZpZzogTmd4Rml0ZWxvQ29uZmlnLFxuICAgIHByaXZhdGUgaHR0cENsaWVudDogSHR0cENsaWVudCxcbiAgKSB7fVxuXG4gIGFzeW5jIHJlZ2lzdGVyVXNlcihjcmVkZW50aWFscykge1xuICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQucG9zdChgJHt0aGlzLmNvbmZpZy5BUElfVVJMfS9vYXV0aC9yZWdpc3RlcmAsIGNyZWRlbnRpYWxzKS50b1Byb21pc2UoKVxuICB9XG5cbiAgYXN5bmMgZ2V0VXNlcihhY2Nlc3NUb2tlbjogc3RyaW5nKTogUHJvbWlzZTxVc2VyRGljdD4ge1xuICAgIGNvbnN0IHVkID0gYXdhaXQgdGhpcy5odHRwQ2xpZW50LmdldDxVc2VyRGljdD4oYCR7dGhpcy5jb25maWcuQVBJX1VSTH0vb2F1dGgvc2VsZmAsIHtoZWFkZXJzOiB7J2FjY2Vzc3Rva2VuJzogYWNjZXNzVG9rZW59fSkudG9Qcm9taXNlKClcbiAgICByZXR1cm4gdWQ7XG4gIH1cblxuICBhc3luYyB1cGRhdGVVc2VyKGFjY2Vzc1Rva2VuOiBzdHJpbmcsIHVzZXJEaWN0OiBVc2VyRGljdCk6IFByb21pc2U8VXNlckRpY3Q+IHtcbiAgICBjb25zdCB1ZCA9IGF3YWl0IHRoaXMuaHR0cENsaWVudC5wb3N0PFVzZXJEaWN0PihgJHt0aGlzLmNvbmZpZy5BUElfVVJMfS9vYXV0aC91cGRhdGV1c2VyYCwgdXNlckRpY3QsIHtoZWFkZXJzOiB7J2FjY2Vzc3Rva2VuJzogYWNjZXNzVG9rZW59fSkudG9Qcm9taXNlKCk7XG4gICAgcmV0dXJuIHVkO1xuICB9XG5cbiAgYXN5bmMgZm9yZ290UGFzc3dvcmQoZW1haWw6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQucG9zdChgJHt0aGlzLmNvbmZpZy5BUElfVVJMfS9vYXV0aC9mb3Jnb3QtcGFzc3dvcmRgLHtlbWFpbDogZW1haWx9KS50b1Byb21pc2UoKTtcbiAgfVxuXG4gIGFzeW5jIHJlc2V0UGFzc3dvcmQoZW1haWw6IHN0cmluZywgY29kZTogbnVtYmVyLCBwYXNzd29yZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5wb3N0KGAke3RoaXMuY29uZmlnLkFQSV9VUkx9L29hdXRoL3Jlc2V0LXBhc3N3b3JkYCx7ZW1haWw6IGVtYWlsLCBjb2RlOiBjb2RlLCBwYXNzd29yZDogcGFzc3dvcmR9KS50b1Byb21pc2UoKTtcbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRpbmUoYWNjZXNzVG9rZW46IHN0cmluZywgaWQ6IG51bWJlciwgZGF0ZSkge1xuICAgIGxldCBkYXRhO1xuICAgIHRyeSB7XG4gICAgICBkYXRhID0gYXdhaXQgdGhpcy5odHRwQ2xpZW50LmdldDxSb3V0aW5lRGljdD4oYCR7dGhpcy5jb25maWcuQVBJX1VSTH0vb2F1dGgvcm91dGluZXMvJHtpZH0vJHtkYXRlfWAsIHtoZWFkZXJzOiB7J2FjY2Vzc3Rva2VuJzogYWNjZXNzVG9rZW59fSkudG9Qcm9taXNlKCk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICBkYXRhID0gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBhc3luYyB1cGRhdGVSb3V0aW5lKGFjY2Vzc1Rva2VuOiBzdHJpbmcsIHVzZXJJZDogbnVtYmVyLCBkYXRlOiBzdHJpbmcsIG1lYWxJZDogbnVtYmVyLCB2YWx1ZTogYm9vbGVhbikge1xuICAgIGRhdGUgPSBtb21lbnQoZGF0ZSkuZm9ybWF0KCdZWVlZLU1NLUREJyk7XG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogICd0ZXh0L3BsYWluJyxcbiAgICAgICAgJ2FjY2Vzc3Rva2VuJzogYWNjZXNzVG9rZW5cbiAgICAgIH0pXG4gICAgfVxuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuY29uZmlnLkFQSV9VUkx9L29hdXRoL3JvdXRpbmVzLyR7dXNlcklkfS8ke2RhdGV9L21lYWx0YWtlbi8ke21lYWxJZH1gO1xuICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQucHV0KHVybCwgdmFsdWUsIGh0dHBPcHRpb25zKS50b1Byb21pc2UoKTtcbiAgfVxuXG4gIGFzeW5jIGdldEdyb2NlcmllcyhhY2Nlc3NUb2tlbjogc3RyaW5nLCB1c2VySWQ6IG51bWJlcikge1xuICAgIGxldCBmaXRlcnBhcmFtID0gbmV3IEh0dHBQYXJhbXMoKS5zZXQoJ2ZpbHRlcnMnLCBKU09OLnN0cmluZ2lmeSh0aGlzLmdldEZpbGVyc0FycmF5KCkpKTtcbiAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLmh0dHBDbGllbnQuZ2V0PFJvdXRpbmVzPihgJHt0aGlzLmNvbmZpZy5BUElfVVJMfS9vYXV0aC9yb3V0aW5lcy8ke3VzZXJJZH1gLHtwYXJhbXM6IGZpdGVycGFyYW0sIGhlYWRlcnM6IHsnYWNjZXNzdG9rZW4nOiBhY2Nlc3NUb2tlbn19KS50b1Byb21pc2UoKTtcblxuICAgIGxldCByb3V0aW5lOiBhbnkgPSByZXMuZGF0YVxuICAgIGxldCBuZXdncm9jZXJpZXNEaWN0OiBhbnkgPSB7fTtcbiAgICByb3V0aW5lLmZvckVhY2goKHZhbCkgPT4ge1xuICAgICAgdmFsLm1lYWxEaWN0cy5mb3JFYWNoKChtZWFsKSA9PiB7XG4gICAgICAgIG1lYWwucmVjaXBlRGljdHMuZm9yRWFjaCgocmVjaXBlKSA9PiB7XG4gICAgICAgICAgaWYocmVjaXBlLmdyb2NlcnlEaWN0cykge1xuICAgICAgICAgICAgcmVjaXBlLmdyb2NlcnlEaWN0cy5mb3JFYWNoKChncm9jZXJ5KSA9PiB7XG4gICAgICAgICAgICAgIG5ld2dyb2Nlcmllc0RpY3RbZ3JvY2VyeS5pZF0gPSBncm9jZXJ5O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhuZXdncm9jZXJpZXNEaWN0KTtcbiAgfVxuXG4gIGdldEZpbGVyc0FycmF5KCkge1xuICAgIGNvbnN0IHRvZGF5ID0gbW9tZW50KCkuZm9ybWF0KFwiWVlZWU1NRERcIik7XG5cbiAgICBsZXQgZmlsZXJzQXJyYXkgPSBbXG4gICAgICB7XG4gICAgICAgIFwiZmllbGRcIjogXCJkYXRlXCIsXG4gICAgICAgIFwib3BlcmF0b3JcIjogXCI+PVwiLFxuICAgICAgICBcInZhbHVlXCI6IHRvZGF5LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJmaWVsZFwiOiBcImRhdGVcIixcbiAgICAgICAgXCJvcGVyYXRvclwiOiBcIjw9XCIsXG4gICAgICAgIFwidmFsdWVcIjogbW9tZW50KCkuYWRkKDcsJ2RheScpLmZvcm1hdChcIllZWVlNTUREXCIpXG4gICAgICB9XG4gICAgXVxuXG4gICAgcmV0dXJuIGZpbGVyc0FycmF5O1xuICB9XG5cbn1cblxuaW50ZXJmYWNlIFJvdXRpbmVzIHtcbiAgZGF0YT86IFJvdXRpbmVEaWN0W10sXG4gIHBhZ2luZz86IGFueVxufVxuIl19
import { __awaiter } from "tslib";
import { Inject, Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import moment from 'moment';
import { ngxFiteloConfig } from '../../tokens';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class UserRoutineResource {
    constructor(config, http) {
        this.config = config;
        this.http = http;
    }
    getRoutine(id, date) {
        return __awaiter(this, void 0, void 0, function* () {
            let data;
            try {
                data = yield this.http.get(`${this.config.API_URL}/users/${id}/routines/${date}`).toPromise();
            }
            catch (e) {
                data = null;
            }
            return data;
        });
    }
    updateRoutine(id, date, mealId, value) {
        return __awaiter(this, void 0, void 0, function* () {
            let payload = value;
            date = moment(date).format('YYYY-MM-DD');
            const httpOptions = {
                headers: new HttpHeaders({
                    'Content-Type': 'text/plain',
                    Authorization: 'my-auth-token'
                })
            };
            const url = `${this.config.API_URL}/users/${id}/routines/${date}/mealtaken/${mealId}`;
            return this.http.put(url, payload, httpOptions).toPromise();
        });
    }
    getGroceries(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let fiterparam = new HttpParams().set('filters', JSON.stringify(this.getFilersArray()));
            const res = yield this.http.get(`${this.config.API_URL}/users/${id}/routines`, { params: fiterparam }).toPromise();
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
UserRoutineResource.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: UserRoutineResource, deps: [{ token: ngxFiteloConfig }, { token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
UserRoutineResource.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: UserRoutineResource, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: UserRoutineResource, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [ngxFiteloConfig]
                }] }, { type: i1.HttpClient }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1yb3V0aW5lLnJlc291cmNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWZpdGVsby9zcmMvbGliL3Jlc291cmNlcy9hcGkvdXNlci1yb3V0aW5lLnJlc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQWMsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTNFLE9BQU8sTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUM1QixPQUFPLEVBQUUsZUFBZSxFQUFtQixNQUFNLGNBQWMsQ0FBQzs7O0FBS2hFLE1BQU0sT0FBTyxtQkFBbUI7SUFFOUIsWUFDbUMsTUFBdUIsRUFDaEQsSUFBZ0I7UUFEUyxXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQUNoRCxTQUFJLEdBQUosSUFBSSxDQUFZO0lBQ3ZCLENBQUM7SUFFRSxVQUFVLENBQUMsRUFBVSxFQUFFLElBQUk7O1lBQy9CLElBQUksSUFBSSxDQUFDO1lBQ1QsSUFBSTtnQkFDRixJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxVQUFVLEVBQUUsYUFBYSxJQUFJLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQzVHO1lBQ0QsT0FBTyxDQUFDLEVBQUU7Z0JBQ1IsSUFBSSxHQUFHLElBQUksQ0FBQzthQUNiO1lBQ0QsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO0tBQUE7SUFFSyxhQUFhLENBQUMsRUFBVSxFQUFFLElBQVksRUFBRSxNQUFjLEVBQUUsS0FBYzs7WUFDMUUsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3pDLE1BQU0sV0FBVyxHQUFHO2dCQUNsQixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUM7b0JBQ3ZCLGNBQWMsRUFBRyxZQUFZO29CQUM3QixhQUFhLEVBQUUsZUFBZTtpQkFDL0IsQ0FBQzthQUNILENBQUE7WUFDRCxNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxVQUFVLEVBQUUsYUFBYSxJQUFJLGNBQWMsTUFBTSxFQUFFLENBQUM7WUFDdEYsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzlELENBQUM7S0FBQTtJQUVLLFlBQVksQ0FBQyxFQUFVOztZQUMzQixJQUFJLFVBQVUsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3hGLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sVUFBVSxFQUFFLFdBQVcsRUFBQyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBRTFILElBQUksT0FBTyxHQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUE7WUFDM0IsSUFBSSxnQkFBZ0IsR0FBUSxFQUFFLENBQUM7WUFDL0IsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUN0QixHQUFHLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO29CQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO3dCQUNsQyxJQUFHLE1BQU0sQ0FBQyxZQUFZLEVBQUU7NEJBQ3RCLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7Z0NBQ3RDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUM7NEJBQ3pDLENBQUMsQ0FBQyxDQUFBO3lCQUNIO29CQUNILENBQUMsQ0FBQyxDQUFBO2dCQUNKLENBQUMsQ0FBQyxDQUFBO1lBQ0osQ0FBQyxDQUFDLENBQUE7WUFFRixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN6QyxDQUFDO0tBQUE7SUFFRCxjQUFjO1FBQ1osTUFBTSxLQUFLLEdBQUcsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRTFDLElBQUksV0FBVyxHQUFHO1lBQ2hCO2dCQUNFLE9BQU8sRUFBRSxNQUFNO2dCQUNmLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixPQUFPLEVBQUUsS0FBSzthQUNmO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLE1BQU07Z0JBQ2YsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7YUFDbEQ7U0FDRixDQUFBO1FBRUQsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQzs7Z0hBckVVLG1CQUFtQixrQkFHcEIsZUFBZTtvSEFIZCxtQkFBbUIsY0FGbEIsTUFBTTsyRkFFUCxtQkFBbUI7a0JBSC9CLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzswQkFJSSxNQUFNOzJCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgUm91dGluZURpY3QgfSBmcm9tICdtb2RlbHMvcm91dGluZS9yb3V0aW5lLmRpY3QnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgbmd4Rml0ZWxvQ29uZmlnLCBOZ3hGaXRlbG9Db25maWcgfSBmcm9tICcuLi8uLi90b2tlbnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVXNlclJvdXRpbmVSZXNvdXJjZSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChuZ3hGaXRlbG9Db25maWcpIHByaXZhdGUgY29uZmlnOiBOZ3hGaXRlbG9Db25maWcsXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICApIHt9XG5cbiAgYXN5bmMgZ2V0Um91dGluZShpZDogbnVtYmVyLCBkYXRlKSB7XG4gICAgbGV0IGRhdGE7XG4gICAgdHJ5IHtcbiAgICAgIGRhdGEgPSBhd2FpdCB0aGlzLmh0dHAuZ2V0PFJvdXRpbmVEaWN0PihgJHt0aGlzLmNvbmZpZy5BUElfVVJMfS91c2Vycy8ke2lkfS9yb3V0aW5lcy8ke2RhdGV9YCkudG9Qcm9taXNlKCk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICBkYXRhID0gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBhc3luYyB1cGRhdGVSb3V0aW5lKGlkOiBudW1iZXIsIGRhdGU6IHN0cmluZywgbWVhbElkOiBudW1iZXIsIHZhbHVlOiBib29sZWFuKSB7XG4gICAgbGV0IHBheWxvYWQgPSB2YWx1ZTtcbiAgICBkYXRlID0gbW9tZW50KGRhdGUpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICAndGV4dC9wbGFpbicsXG4gICAgICAgIEF1dGhvcml6YXRpb246ICdteS1hdXRoLXRva2VuJ1xuICAgICAgfSlcbiAgICB9XG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5jb25maWcuQVBJX1VSTH0vdXNlcnMvJHtpZH0vcm91dGluZXMvJHtkYXRlfS9tZWFsdGFrZW4vJHttZWFsSWR9YDtcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh1cmwsIHBheWxvYWQsIGh0dHBPcHRpb25zKS50b1Byb21pc2UoKTtcbiAgfVxuXG4gIGFzeW5jIGdldEdyb2NlcmllcyhpZDogbnVtYmVyKSB7XG4gICAgbGV0IGZpdGVycGFyYW0gPSBuZXcgSHR0cFBhcmFtcygpLnNldCgnZmlsdGVycycsIEpTT04uc3RyaW5naWZ5KHRoaXMuZ2V0RmlsZXJzQXJyYXkoKSkpO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuaHR0cC5nZXQ8Um91dGluZXM+KGAke3RoaXMuY29uZmlnLkFQSV9VUkx9L3VzZXJzLyR7aWR9L3JvdXRpbmVzYCx7cGFyYW1zOiBmaXRlcnBhcmFtfSkudG9Qcm9taXNlKCk7XG5cbiAgICBsZXQgcm91dGluZTogYW55ID0gcmVzLmRhdGFcbiAgICBsZXQgbmV3Z3JvY2VyaWVzRGljdDogYW55ID0ge307XG4gICAgcm91dGluZS5mb3JFYWNoKCh2YWwpID0+IHtcbiAgICAgIHZhbC5tZWFsRGljdHMuZm9yRWFjaCgobWVhbCkgPT4ge1xuICAgICAgICBtZWFsLnJlY2lwZURpY3RzLmZvckVhY2goKHJlY2lwZSkgPT4ge1xuICAgICAgICAgIGlmKHJlY2lwZS5ncm9jZXJ5RGljdHMpIHtcbiAgICAgICAgICAgIHJlY2lwZS5ncm9jZXJ5RGljdHMuZm9yRWFjaCgoZ3JvY2VyeSkgPT4ge1xuICAgICAgICAgICAgICBuZXdncm9jZXJpZXNEaWN0W2dyb2NlcnkuaWRdID0gZ3JvY2VyeTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMobmV3Z3JvY2VyaWVzRGljdCk7XG4gIH1cblxuICBnZXRGaWxlcnNBcnJheSgpIHtcbiAgICBjb25zdCB0b2RheSA9IG1vbWVudCgpLmZvcm1hdChcIllZWVlNTUREXCIpO1xuXG4gICAgbGV0IGZpbGVyc0FycmF5ID0gW1xuICAgICAge1xuICAgICAgICBcImZpZWxkXCI6IFwiZGF0ZVwiLFxuICAgICAgICBcIm9wZXJhdG9yXCI6IFwiPj1cIixcbiAgICAgICAgXCJ2YWx1ZVwiOiB0b2RheSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiZmllbGRcIjogXCJkYXRlXCIsXG4gICAgICAgIFwib3BlcmF0b3JcIjogXCI8PVwiLFxuICAgICAgICBcInZhbHVlXCI6IG1vbWVudCgpLmFkZCg3LCdkYXknKS5mb3JtYXQoXCJZWVlZTU1ERFwiKVxuICAgICAgfVxuICAgIF1cblxuICAgIHJldHVybiBmaWxlcnNBcnJheTtcbiAgfVxuXG59XG5cbmludGVyZmFjZSBSb3V0aW5lcyB7XG4gIGRhdGE/OiBSb3V0aW5lRGljdFtdLFxuICBwYWdpbmc/OiBhbnlcbn1cbiJdfQ==
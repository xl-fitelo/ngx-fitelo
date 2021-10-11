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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1yb3V0aW5lLnJlc291cmNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWZpdGVsby9zcmMvbGliL3Jlc291cmNlcy9hcGkvdXNlci1yb3V0aW5lLnJlc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQWMsV0FBVyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTNFLE9BQU8sTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUM1QixPQUFPLEVBQUUsZUFBZSxFQUFtQixNQUFNLGNBQWMsQ0FBQzs7O0FBS2hFLE1BQU0sT0FBTyxtQkFBbUI7SUFFOUIsWUFDbUMsTUFBdUIsRUFDaEQsSUFBZ0I7UUFEUyxXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQUNoRCxTQUFJLEdBQUosSUFBSSxDQUFZO0lBQ3ZCLENBQUM7SUFFRSxVQUFVLENBQUMsRUFBVSxFQUFFLElBQUk7O1lBQy9CLElBQUksSUFBSSxDQUFDO1lBQ1QsSUFBSTtnQkFDRixJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxVQUFVLEVBQUUsYUFBYSxJQUFJLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQzVHO1lBQ0QsT0FBTyxDQUFDLEVBQUU7Z0JBQ1IsSUFBSSxHQUFHLElBQUksQ0FBQzthQUNiO1lBQ0QsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO0tBQUE7SUFFSyxhQUFhLENBQUMsRUFBVSxFQUFFLElBQVksRUFBRSxNQUFjLEVBQUUsS0FBYzs7WUFDMUUsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3pDLE1BQU0sV0FBVyxHQUFHO2dCQUNsQixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUM7b0JBQ3ZCLGNBQWMsRUFBRyxZQUFZO29CQUM3QixhQUFhLEVBQUUsZUFBZTtpQkFDL0IsQ0FBQzthQUNILENBQUE7WUFDRCxNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxVQUFVLEVBQUUsYUFBYSxJQUFJLGNBQWMsTUFBTSxFQUFFLENBQUM7WUFDdEYsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzlELENBQUM7S0FBQTtJQUVLLFlBQVksQ0FBQyxFQUFVOztZQUMzQixJQUFJLFVBQVUsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3hGLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sVUFBVSxFQUFFLFdBQVcsRUFBQyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBRTFILElBQUksT0FBTyxHQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUE7WUFDM0IsSUFBSSxnQkFBZ0IsR0FBUSxFQUFFLENBQUM7WUFDL0IsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUN0QixHQUFHLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO29CQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO3dCQUNsQyxJQUFHLE1BQU0sQ0FBQyxZQUFZLEVBQUU7NEJBQ3RCLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7Z0NBQ3RDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUM7NEJBQ3pDLENBQUMsQ0FBQyxDQUFBO3lCQUNIO29CQUNILENBQUMsQ0FBQyxDQUFBO2dCQUNKLENBQUMsQ0FBQyxDQUFBO1lBQ0osQ0FBQyxDQUFDLENBQUE7WUFFRixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN6QyxDQUFDO0tBQUE7SUFFRCxjQUFjO1FBQ1osTUFBTSxLQUFLLEdBQUcsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRTFDLElBQUksV0FBVyxHQUFHO1lBQ2hCO2dCQUNFLE9BQU8sRUFBRSxNQUFNO2dCQUNmLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixPQUFPLEVBQUUsS0FBSzthQUNmO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLE1BQU07Z0JBQ2YsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7YUFDbEQ7U0FDRixDQUFBO1FBRUQsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQzs7Z0hBckVVLG1CQUFtQixrQkFHcEIsZUFBZTtvSEFIZCxtQkFBbUIsY0FGbEIsTUFBTTsyRkFFUCxtQkFBbUI7a0JBSC9CLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzswQkFJSSxNQUFNOzJCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgUm91dGluZURpY3QgfSBmcm9tICd0c3gtZml0ZWxvJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IG5neEZpdGVsb0NvbmZpZywgTmd4Rml0ZWxvQ29uZmlnIH0gZnJvbSAnLi4vLi4vdG9rZW5zJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJSb3V0aW5lUmVzb3VyY2Uge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3Qobmd4Rml0ZWxvQ29uZmlnKSBwcml2YXRlIGNvbmZpZzogTmd4Rml0ZWxvQ29uZmlnLFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgKSB7fVxuXG4gIGFzeW5jIGdldFJvdXRpbmUoaWQ6IG51bWJlciwgZGF0ZSkge1xuICAgIGxldCBkYXRhO1xuICAgIHRyeSB7XG4gICAgICBkYXRhID0gYXdhaXQgdGhpcy5odHRwLmdldDxSb3V0aW5lRGljdD4oYCR7dGhpcy5jb25maWcuQVBJX1VSTH0vdXNlcnMvJHtpZH0vcm91dGluZXMvJHtkYXRlfWApLnRvUHJvbWlzZSgpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgZGF0YSA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgYXN5bmMgdXBkYXRlUm91dGluZShpZDogbnVtYmVyLCBkYXRlOiBzdHJpbmcsIG1lYWxJZDogbnVtYmVyLCB2YWx1ZTogYm9vbGVhbikge1xuICAgIGxldCBwYXlsb2FkID0gdmFsdWU7XG4gICAgZGF0ZSA9IG1vbWVudChkYXRlKS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAgJ3RleHQvcGxhaW4nLFxuICAgICAgICBBdXRob3JpemF0aW9uOiAnbXktYXV0aC10b2tlbidcbiAgICAgIH0pXG4gICAgfVxuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuY29uZmlnLkFQSV9VUkx9L3VzZXJzLyR7aWR9L3JvdXRpbmVzLyR7ZGF0ZX0vbWVhbHRha2VuLyR7bWVhbElkfWA7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodXJsLCBwYXlsb2FkLCBodHRwT3B0aW9ucykudG9Qcm9taXNlKCk7XG4gIH1cblxuICBhc3luYyBnZXRHcm9jZXJpZXMoaWQ6IG51bWJlcikge1xuICAgIGxldCBmaXRlcnBhcmFtID0gbmV3IEh0dHBQYXJhbXMoKS5zZXQoJ2ZpbHRlcnMnLCBKU09OLnN0cmluZ2lmeSh0aGlzLmdldEZpbGVyc0FycmF5KCkpKTtcbiAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLmh0dHAuZ2V0PFJvdXRpbmVzPihgJHt0aGlzLmNvbmZpZy5BUElfVVJMfS91c2Vycy8ke2lkfS9yb3V0aW5lc2Ase3BhcmFtczogZml0ZXJwYXJhbX0pLnRvUHJvbWlzZSgpO1xuXG4gICAgbGV0IHJvdXRpbmU6IGFueSA9IHJlcy5kYXRhXG4gICAgbGV0IG5ld2dyb2Nlcmllc0RpY3Q6IGFueSA9IHt9O1xuICAgIHJvdXRpbmUuZm9yRWFjaCgodmFsKSA9PiB7XG4gICAgICB2YWwubWVhbERpY3RzLmZvckVhY2goKG1lYWwpID0+IHtcbiAgICAgICAgbWVhbC5yZWNpcGVEaWN0cy5mb3JFYWNoKChyZWNpcGUpID0+IHtcbiAgICAgICAgICBpZihyZWNpcGUuZ3JvY2VyeURpY3RzKSB7XG4gICAgICAgICAgICByZWNpcGUuZ3JvY2VyeURpY3RzLmZvckVhY2goKGdyb2NlcnkpID0+IHtcbiAgICAgICAgICAgICAgbmV3Z3JvY2VyaWVzRGljdFtncm9jZXJ5LmlkXSA9IGdyb2Nlcnk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHJldHVybiBPYmplY3QudmFsdWVzKG5ld2dyb2Nlcmllc0RpY3QpO1xuICB9XG5cbiAgZ2V0RmlsZXJzQXJyYXkoKSB7XG4gICAgY29uc3QgdG9kYXkgPSBtb21lbnQoKS5mb3JtYXQoXCJZWVlZTU1ERFwiKTtcblxuICAgIGxldCBmaWxlcnNBcnJheSA9IFtcbiAgICAgIHtcbiAgICAgICAgXCJmaWVsZFwiOiBcImRhdGVcIixcbiAgICAgICAgXCJvcGVyYXRvclwiOiBcIj49XCIsXG4gICAgICAgIFwidmFsdWVcIjogdG9kYXksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImZpZWxkXCI6IFwiZGF0ZVwiLFxuICAgICAgICBcIm9wZXJhdG9yXCI6IFwiPD1cIixcbiAgICAgICAgXCJ2YWx1ZVwiOiBtb21lbnQoKS5hZGQoNywnZGF5JykuZm9ybWF0KFwiWVlZWU1NRERcIilcbiAgICAgIH1cbiAgICBdXG5cbiAgICByZXR1cm4gZmlsZXJzQXJyYXk7XG4gIH1cblxufVxuXG5pbnRlcmZhY2UgUm91dGluZXMge1xuICBkYXRhPzogUm91dGluZURpY3RbXSxcbiAgcGFnaW5nPzogYW55XG59XG4iXX0=
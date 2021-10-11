import { Inject, Injectable } from "@angular/core";
import { ngxFiteloConfig } from "../../tokens";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class PaymentsResource {
    constructor(httpClient, config) {
        this.httpClient = httpClient;
        this.config = config;
    }
    createOrder(plan) {
        return this.httpClient.post(`${this.config.API_URL}/payments/createorder`, { "amount": plan.price * 100 }).toPromise();
    }
    verify(requestBody) {
        return this.httpClient.post(`${this.config.API_URL}/payments/verify`, requestBody).toPromise();
    }
}
PaymentsResource.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: PaymentsResource, deps: [{ token: i1.HttpClient }, { token: ngxFiteloConfig }], target: i0.ɵɵFactoryTarget.Injectable });
PaymentsResource.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: PaymentsResource, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: PaymentsResource, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [ngxFiteloConfig]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudHMucmVzb3VyY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZml0ZWxvL3NyYy9saWIvcmVzb3VyY2VzL2FwaS9wYXltZW50cy5yZXNvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQW1CLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7O0FBS2hFLE1BQU0sT0FBTyxnQkFBZ0I7SUFFM0IsWUFDVSxVQUFzQixFQUNHLE1BQXVCO1FBRGhELGVBQVUsR0FBVixVQUFVLENBQVk7UUFDRyxXQUFNLEdBQU4sTUFBTSxDQUFpQjtJQUN2RCxDQUFDO0lBRUosV0FBVyxDQUFDLElBQUk7UUFDZCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLHVCQUF1QixFQUFFLEVBQUMsUUFBUSxFQUFHLElBQUksQ0FBQyxLQUFLLEdBQUMsR0FBRyxFQUFDLENBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQTtJQUN0SCxDQUFDO0lBRUQsTUFBTSxDQUFDLFdBQVc7UUFDaEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxrQkFBa0IsRUFBRSxXQUFXLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQTtJQUN6RyxDQUFDOzs2R0FiVSxnQkFBZ0IsNENBSWpCLGVBQWU7aUhBSmQsZ0JBQWdCLGNBRmYsTUFBTTsyRkFFUCxnQkFBZ0I7a0JBSDVCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzswQkFLSSxNQUFNOzJCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmd4Rml0ZWxvQ29uZmlnLCBuZ3hGaXRlbG9Db25maWcgfSBmcm9tIFwiLi4vLi4vdG9rZW5zXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQYXltZW50c1Jlc291cmNlIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQsXG4gICAgQEluamVjdChuZ3hGaXRlbG9Db25maWcpIHByaXZhdGUgY29uZmlnOiBOZ3hGaXRlbG9Db25maWcsXG4gICkge31cblxuICBjcmVhdGVPcmRlcihwbGFuKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5wb3N0KGAke3RoaXMuY29uZmlnLkFQSV9VUkx9L3BheW1lbnRzL2NyZWF0ZW9yZGVyYCwge1wiYW1vdW50XCIgOiBwbGFuLnByaWNlKjEwMH0sKS50b1Byb21pc2UoKVxuICB9XG5cbiAgdmVyaWZ5KHJlcXVlc3RCb2R5KSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5wb3N0PGJvb2xlYW4+KGAke3RoaXMuY29uZmlnLkFQSV9VUkx9L3BheW1lbnRzL3ZlcmlmeWAsIHJlcXVlc3RCb2R5KS50b1Byb21pc2UoKVxuICB9XG5cbn1cbiJdfQ==
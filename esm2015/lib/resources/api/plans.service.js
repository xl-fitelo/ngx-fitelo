import { Inject, Injectable } from "@angular/core";
import { ngxFiteloConfig } from "../../tokens";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class PlansService {
    constructor(http, config) {
        this.http = http;
        this.config = config;
    }
    getPlans() {
        const url = `${this.config.API_URL}/plans`;
        return this.http.get(url).toPromise();
    }
}
PlansService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: PlansService, deps: [{ token: i1.HttpClient }, { token: ngxFiteloConfig }], target: i0.ɵɵFactoryTarget.Injectable });
PlansService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: PlansService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: PlansService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [ngxFiteloConfig]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhbnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1maXRlbG8vc3JjL2xpYi9yZXNvdXJjZXMvYXBpL3BsYW5zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFtQixlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7OztBQUtoRSxNQUFNLE9BQU8sWUFBWTtJQUV2QixZQUNVLElBQWdCLEVBQ1MsTUFBdUI7UUFEaEQsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNTLFdBQU0sR0FBTixNQUFNLENBQWlCO0lBQ3ZELENBQUM7SUFFSixRQUFRO1FBQ04sTUFBTSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sUUFBUSxDQUFDO1FBQzNDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDeEMsQ0FBQzs7eUdBVlUsWUFBWSw0Q0FJYixlQUFlOzZHQUpkLFlBQVksY0FGWCxNQUFNOzJGQUVQLFlBQVk7a0JBSHhCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzswQkFLSSxNQUFNOzJCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgTmd4Rml0ZWxvQ29uZmlnLCBuZ3hGaXRlbG9Db25maWcgfSBmcm9tIFwiLi4vLi4vdG9rZW5zXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQbGFuc1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBASW5qZWN0KG5neEZpdGVsb0NvbmZpZykgcHJpdmF0ZSBjb25maWc6IE5neEZpdGVsb0NvbmZpZyxcbiAgKSB7fVxuXG4gIGdldFBsYW5zKCk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5jb25maWcuQVBJX1VSTH0vcGxhbnNgO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCkudG9Qcm9taXNlKCk7XG4gIH1cbn1cbiJdfQ==
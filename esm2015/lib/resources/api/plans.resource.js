import { Inject, Injectable } from "@angular/core";
import { ngxFiteloConfig } from "../../tokens";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class PlansResource {
    constructor(http, config) {
        this.http = http;
        this.config = config;
    }
    getPlans() {
        const url = `${this.config.API_URL}/plans`;
        return this.http.get(url).toPromise();
    }
}
PlansResource.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: PlansResource, deps: [{ token: i1.HttpClient }, { token: ngxFiteloConfig }], target: i0.ɵɵFactoryTarget.Injectable });
PlansResource.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: PlansResource, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: PlansResource, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [ngxFiteloConfig]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhbnMucmVzb3VyY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZml0ZWxvL3NyYy9saWIvcmVzb3VyY2VzL2FwaS9wbGFucy5yZXNvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRCxPQUFPLEVBQW1CLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7O0FBS2hFLE1BQU0sT0FBTyxhQUFhO0lBRXhCLFlBQ1UsSUFBZ0IsRUFDUyxNQUF1QjtRQURoRCxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ1MsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7SUFDdkQsQ0FBQztJQUVKLFFBQVE7UUFDTixNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxRQUFRLENBQUM7UUFDM0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUN4QyxDQUFDOzswR0FWVSxhQUFhLDRDQUlkLGVBQWU7OEdBSmQsYUFBYSxjQUZaLE1BQU07MkZBRVAsYUFBYTtrQkFIekIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OzBCQUtJLE1BQU07MkJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBOZ3hGaXRlbG9Db25maWcsIG5neEZpdGVsb0NvbmZpZyB9IGZyb20gXCIuLi8uLi90b2tlbnNcIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFBsYW5zUmVzb3VyY2Uge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBASW5qZWN0KG5neEZpdGVsb0NvbmZpZykgcHJpdmF0ZSBjb25maWc6IE5neEZpdGVsb0NvbmZpZyxcbiAgKSB7fVxuXG4gIGdldFBsYW5zKCk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5jb25maWcuQVBJX1VSTH0vcGxhbnNgO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCkudG9Qcm9taXNlKCk7XG4gIH1cbn1cbiJdfQ==
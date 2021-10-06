import { HttpClient } from "@angular/common/http";
import { NgxFiteloConfig } from "../../tokens";
import * as i0 from "@angular/core";
export declare class PlansResource {
    private http;
    private config;
    constructor(http: HttpClient, config: NgxFiteloConfig);
    getPlans(): Promise<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PlansResource, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PlansResource>;
}

import { HttpClient } from "@angular/common/http";
import { NgxFiteloConfig } from "../../tokens";
import * as i0 from "@angular/core";
export declare class PlansService {
    private http;
    private config;
    constructor(http: HttpClient, config: NgxFiteloConfig);
    getPlans(): Promise<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PlansService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PlansService>;
}

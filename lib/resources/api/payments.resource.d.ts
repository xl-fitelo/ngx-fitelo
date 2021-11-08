import { HttpClient } from "@angular/common/http";
import { NgxFiteloConfig } from "../../tokens";
import * as i0 from "@angular/core";
export declare class PaymentsResource {
    private httpClient;
    private config;
    constructor(httpClient: HttpClient, config: NgxFiteloConfig);
    createOrder(plan: any): Promise<Object>;
    verify(requestBody: any): Promise<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaymentsResource, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PaymentsResource>;
}

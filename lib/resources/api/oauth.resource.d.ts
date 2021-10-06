import { HttpClient } from "@angular/common/http";
import { UserDict } from "tsx-fitelo";
import { NgxFiteloConfig } from "../../tokens";
import * as i0 from "@angular/core";
export declare class OauthResource {
    private config;
    private httpClient;
    constructor(config: NgxFiteloConfig, httpClient: HttpClient);
    registerUser(credentials: any): Promise<Object>;
    getUser(uid: string): Promise<UserDict>;
    updateUser(uid: string, userDict: UserDict): Promise<UserDict>;
    updateSubscription(uid: any, plan: any, razorpay_payment_id: any): Promise<Object>;
    static ɵfac: i0.ɵɵFactoryDeclaration<OauthResource, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OauthResource>;
}

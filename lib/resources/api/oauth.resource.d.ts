import { HttpClient } from "@angular/common/http";
import { UserDict } from "tsx-fitelo";
import { NgxFiteloConfig } from "../../tokens";
import * as i0 from "@angular/core";
export declare class OauthResource {
    private config;
    private httpClient;
    constructor(config: NgxFiteloConfig, httpClient: HttpClient);
    registerUser(credentials: any): Promise<Object>;
    getUser(accessToken: string): Promise<UserDict>;
    updateUser(accessToken: string, userDict: UserDict): Promise<UserDict>;
    forgotPassword(email: string): Promise<Object>;
    resetPassword(email: string, code: number, password: string): Promise<Object>;
    getRoutine(accessToken: string, id: number, date: any): Promise<any>;
    updateRoutine(accessToken: string, userId: number, date: string, mealId: number, value: boolean): Promise<Object>;
    getGroceries(accessToken: string, userId: number): Promise<unknown[]>;
    getFilersArray(): {
        field: string;
        operator: string;
        value: string;
    }[];
    static ɵfac: i0.ɵɵFactoryDeclaration<OauthResource, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OauthResource>;
}

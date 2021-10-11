import { HttpClient } from '@angular/common/http';
import { NgxFiteloConfig } from '../../tokens';
import * as i0 from "@angular/core";
export declare class UserRoutineResource {
    private config;
    private http;
    constructor(config: NgxFiteloConfig, http: HttpClient);
    getRoutine(id: number, date: any): Promise<any>;
    updateRoutine(id: number, date: string, mealId: number, value: boolean): Promise<Object>;
    getGroceries(id: number): Promise<unknown[]>;
    getFilersArray(): {
        field: string;
        operator: string;
        value: string;
    }[];
    static ɵfac: i0.ɵɵFactoryDeclaration<UserRoutineResource, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UserRoutineResource>;
}

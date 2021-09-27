import { AngularFirestore } from "@angular/fire/firestore";
import * as i0 from "@angular/core";
export declare class UserAnalysisResource {
    private firestore;
    constructor(firestore: AngularFirestore);
    getUserAnalysis(uid: string): Promise<any>;
    getLatestEntry(uid: string, type: 'weight' | 'measurement' | 'water' | 'sleep'): Promise<any>;
    findLatestEntry(userAnalysis: any, type: 'weight' | 'measurement' | 'water' | 'sleep'): any;
    getLatestEntries(uid: string, type: 'weight' | 'measurement' | 'water' | 'sleep', howMany?: number): Promise<any[]>;
    findLatestEntries(userAnalysis: any, type: 'weight' | 'measurement' | 'water' | 'sleep', howMany?: number): any[];
    saveWeightAndMeasurement(uid: any, date: any, weight: any, measurement: any): Promise<void>;
    saveWater(uid: any, date: any, water: any): Promise<void>;
    saveSleep(uid: any, date: any, sleep: any): Promise<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserAnalysisResource, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UserAnalysisResource>;
}
export declare const defaultMeasurement: {
    arm: number;
    chest: number;
    hips: number;
    stomach: number;
    thigh: number;
    waist: number;
};
export declare const defaultSleep: {
    sleepHrs: number;
    sleepTime: string;
    wakeupTime: string;
};

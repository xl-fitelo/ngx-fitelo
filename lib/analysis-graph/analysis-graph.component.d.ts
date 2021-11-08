import { ChangeDetectorRef, OnChanges } from '@angular/core';
import { UserAnalysisResource } from '../resources/firestore/user-analysis.resource';
import * as i0 from "@angular/core";
export declare class AnalysisGraphComponent implements OnChanges {
    private uar;
    private cdr;
    uid: string;
    type: 'weight' | 'measurement' | 'water' | 'sleep';
    showSpinner: boolean;
    id: any;
    entries: any;
    isLoading: boolean;
    constructor(uar: UserAnalysisResource, cdr: ChangeDetectorRef);
    ngOnChanges(): Promise<void>;
    renderGraph(entries: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AnalysisGraphComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AnalysisGraphComponent, "fit-analysis-graph", never, { "uid": "uid"; "type": "type"; "showSpinner": "showSpinner"; }, {}, never, never>;
}

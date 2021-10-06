import * as i0 from '@angular/core';
import { Injectable, Component, InjectionToken, NgModule, Input, Inject } from '@angular/core';
import * as i3 from '@angular/common';
import { CommonModule } from '@angular/common';
import { __awaiter } from 'tslib';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import * as i1 from '@angular/fire/firestore';
import moment from 'moment';
import * as i1$1 from '@angular/common/http';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import * as i1$2 from '@angular/fire/storage';
import { map } from 'rxjs/operators';

class NgxFiteloService {
    constructor() { }
}
NgxFiteloService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: NgxFiteloService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NgxFiteloService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: NgxFiteloService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: NgxFiteloService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class NgxFiteloComponent {
    constructor() { }
    ngOnInit() {
    }
}
NgxFiteloComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: NgxFiteloComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgxFiteloComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.7", type: NgxFiteloComponent, selector: "lib-ngx-fitelo", ngImport: i0, template: `
    <p>
      ngx-fitelo works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: NgxFiteloComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-ngx-fitelo',
                    template: `
    <p>
      ngx-fitelo works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

const ngxFiteloConfig = new InjectionToken('ngxFiteloConfig');

class NgxFiteloModule {
    static forRoot(config) {
        return {
            ngModule: NgxFiteloModule,
            providers: [{ provide: ngxFiteloConfig, useValue: config }]
        };
    }
}
NgxFiteloModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: NgxFiteloModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgxFiteloModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: NgxFiteloModule, declarations: [NgxFiteloComponent], exports: [NgxFiteloComponent] });
NgxFiteloModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: NgxFiteloModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: NgxFiteloModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NgxFiteloComponent
                    ],
                    imports: [],
                    exports: [
                        NgxFiteloComponent
                    ]
                }]
        }] });

function multiLineGraph(id, entries) {
    let chart = am4core.create(id, am4charts.XYChart);
    chart.paddingLeft = 0;
    // Add data
    chart.data = entries;
    chart.data.sort((a, b) => {
        if (new Date(a.date) < new Date(b.date))
            return -1;
        if (new Date(a.date) > new Date(b.date))
            return 1;
        return 0;
    });
    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.fontSize = 10;
    dateAxis.minZoomCount = 5;
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.minGridDistance = 45;
    dateAxis.dateFormats.setKey('day', 'dd MMM');
    // Create value axis
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.fontSize = 10;
    // Create Series function
    function createSeries(field) {
        var lineSeries = chart.series.push(new am4charts.LineSeries());
        lineSeries.dataFields.valueY = `${field}`;
        lineSeries.dataFields.dateX = 'date';
        lineSeries.fontSize = 10;
        lineSeries.strokeWidth = 1;
        // lineSeries.strokeDasharray = "";
        lineSeries.name = `${field}`;
        // lineSeries.tensionX = 0.77;
        lineSeries.tooltipText = `${field}: {valueY} inch(es)`;
        lineSeries.tooltip.fontSize = 12;
        var bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
        // bullet.disabled = true;
        // bullet.propertyFields.disabled = "disabled";
        bullet.circle.strokeWidth = 0;
        bullet.circle.radius = 2;
        bullet.circle.fill = am4core.color('#6270DD');
        return lineSeries;
    }
    var arm = createSeries('arm');
    var chest = createSeries('chest');
    var stomach = createSeries('stomach');
    var thigh = createSeries('thigh');
    var waist = createSeries('waist');
    var hips = createSeries('hips');
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = 'none';
    chart.cursor.xAxis = dateAxis;
    chart.cursor.snapToSeries = [arm, chest, waist, stomach, thigh, hips];
    chart.legend = new am4charts.Legend();
    chart.legend.position = 'bottom';
}

function singleLineGraph(id, entries) {
    let chart = am4core.create(id, am4charts.XYChart);
    chart.paddingLeft = 0;
    chart.data = entries;
    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.fontSize = 10;
    dateAxis.minZoomCount = 5;
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.minGridDistance = 45;
    dateAxis.dateFormats.setKey('day', 'dd MMM');
    dateAxis.tooltip.fontSize = 12;
    // Create value axis
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.fontSize = 10;
    valueAxis.extraTooltipPrecision = 2;
    valueAxis.tooltip.fontSize = 12;
    // Create series
    let lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.dataFields.valueY = 'value';
    lineSeries.dataFields.dateX = 'date';
    lineSeries.fontSize = 10;
    lineSeries.strokeWidth = 1.5;
    lineSeries.strokeDasharray = '4';
    lineSeries.stroke = am4core.color('#E55F3B');
    // Add simple bullet
    let bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
    // bullet.disabled = true;
    // bullet.propertyFields.disabled = "disabled";
    bullet.circle.strokeWidth = 0;
    bullet.circle.radius = 2;
    bullet.circle.fill = am4core.color('#6270DD');
    let secondCircle = bullet.createChild(am4core.Circle);
    secondCircle.radius = 3;
    secondCircle.fill = am4core.color('#6270DD');
    secondCircle.strokeWidth = 0;
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = 'none';
    chart.cursor.xAxis = dateAxis;
    chart.cursor.snapToSeries = lineSeries;
}

class UserAnalysisResource {
    constructor(firestore) {
        this.firestore = firestore;
    }
    getUserAnalysis(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            let userAnalysis = null;
            try {
                userAnalysis = (yield this.firestore.doc(`usersanalysis/${uid}`).get().toPromise()).data();
            }
            catch (e) { }
            return userAnalysis;
        });
    }
    getLatestEntry(uid, type) {
        return __awaiter(this, void 0, void 0, function* () {
            const userAnalysis = yield this.getUserAnalysis(uid);
            return this.findLatestEntry(userAnalysis, type);
        });
    }
    findLatestEntry(userAnalysis, type) {
        if (!userAnalysis) {
            if (type == 'measurement')
                return defaultMeasurement;
            if (type == 'sleep')
                return defaultSleep;
            return 0;
        }
        let latestEntry = 0;
        if (type == 'measurement')
            latestEntry = defaultMeasurement;
        if (type == 'sleep')
            latestEntry = defaultSleep;
        Object.keys(userAnalysis.data).sort().forEach((date) => {
            const entry = userAnalysis.data[date];
            if (entry[type])
                latestEntry = entry[type];
        });
        return latestEntry;
    }
    getLatestEntries(uid, type, howMany = 7) {
        return __awaiter(this, void 0, void 0, function* () {
            const userAnalysis = yield this.getUserAnalysis(uid);
            return this.findLatestEntries(userAnalysis, type, howMany);
        });
    }
    findLatestEntries(userAnalysis, type, howMany = 7) {
        if (!userAnalysis || !userAnalysis.data) {
            return [];
        }
        let latestEntries = [];
        Object.keys(userAnalysis.data).sort().forEach((date) => {
            const entry = userAnalysis.data[date];
            if (entry[type])
                latestEntries.push({ date: date, value: entry[type] });
        });
        return latestEntries.sort((a, b) => a.date > b.date ? -1 : 1).slice(0, howMany).sort((a, b) => a.date < b.date ? -1 : 1);
    }
    saveWeightAndMeasurement(uid, date, weight, measurement) {
        return __awaiter(this, void 0, void 0, function* () {
            let newUserAnalysis = {};
            const userAnalysis = yield this.getUserAnalysis(uid);
            if (!userAnalysis) {
                newUserAnalysis = {
                    data: {
                        [date]: {
                            measurement: measurement,
                            weight: weight
                        }
                    },
                    uid: uid,
                };
            }
            else {
                newUserAnalysis = userAnalysis;
                if (!newUserAnalysis.data[date])
                    newUserAnalysis.data[date] = {};
                newUserAnalysis.data[date]['measurement'] = measurement;
                newUserAnalysis.data[date]['weight'] = weight;
            }
            return this.firestore.doc(`usersanalysis/${uid}`).set(newUserAnalysis);
        });
    }
    saveWater(uid, date, water) {
        return __awaiter(this, void 0, void 0, function* () {
            let newUserAnalysis = {};
            const userAnalysis = yield this.getUserAnalysis(uid);
            if (!userAnalysis) {
                newUserAnalysis = {
                    data: {
                        [date]: {
                            water: water
                        }
                    },
                    uid: uid,
                };
            }
            else {
                newUserAnalysis = userAnalysis;
                if (!newUserAnalysis.data[date])
                    newUserAnalysis.data[date] = {};
                newUserAnalysis.data[date]['water'] = water;
            }
            return this.firestore.doc(`usersanalysis/${uid}`).set(newUserAnalysis);
        });
    }
    saveSleep(uid, date, sleep) {
        return __awaiter(this, void 0, void 0, function* () {
            let newUserAnalysis = {};
            const userAnalysis = yield this.getUserAnalysis(uid);
            if (!userAnalysis) {
                newUserAnalysis = {
                    data: {
                        [date]: {
                            sleep: sleep
                        }
                    },
                    uid: uid,
                };
            }
            else {
                newUserAnalysis = userAnalysis;
                if (!newUserAnalysis.data[date])
                    newUserAnalysis.data[date] = {};
                newUserAnalysis.data[date]['sleep'] = sleep;
            }
            return this.firestore.doc(`usersanalysis/${uid}`).set(newUserAnalysis);
        });
    }
}
UserAnalysisResource.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: UserAnalysisResource, deps: [{ token: i1.AngularFirestore }], target: i0.ɵɵFactoryTarget.Injectable });
UserAnalysisResource.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: UserAnalysisResource, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: UserAnalysisResource, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.AngularFirestore }]; } });
const defaultMeasurement = {
    arm: 0,
    chest: 0,
    hips: 0,
    stomach: 0,
    thigh: 0,
    waist: 0,
};
const defaultSleep = {
    sleepHrs: 8,
    sleepTime: '22:00',
    wakeupTime: '06:00'
};

class SpinnerComponent {
    constructor() { }
    ngOnInit() { }
}
SpinnerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: SpinnerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SpinnerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.7", type: SpinnerComponent, selector: "fit-spinner", ngImport: i0, template: "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" style=\"margin: auto; background: none; display: block; shape-rendering: auto;\" width=\"41px\" height=\"41px\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\">\n  <g transform=\"translate(75,50)\">\n  <g transform=\"rotate(0)\">\n  <circle cx=\"0\" cy=\"0\" r=\"5\" fill=\"#e55f3b\" fill-opacity=\"1\">\n    <animateTransform attributeName=\"transform\" type=\"scale\" begin=\"-0.875s\" values=\"1.5 1.5;1 1\" keyTimes=\"0;1\" dur=\"1s\" repeatCount=\"indefinite\"/>\n    <animate attributeName=\"fill-opacity\" keyTimes=\"0;1\" dur=\"1s\" repeatCount=\"indefinite\" values=\"1;0\" begin=\"-0.875s\"/>\n  </circle>\n  </g>\n  </g><g transform=\"translate(67.67766952966369,67.67766952966369)\">\n  <g transform=\"rotate(45)\">\n  <circle cx=\"0\" cy=\"0\" r=\"5\" fill=\"#e55f3b\" fill-opacity=\"0.875\">\n    <animateTransform attributeName=\"transform\" type=\"scale\" begin=\"-0.75s\" values=\"1.5 1.5;1 1\" keyTimes=\"0;1\" dur=\"1s\" repeatCount=\"indefinite\"/>\n    <animate attributeName=\"fill-opacity\" keyTimes=\"0;1\" dur=\"1s\" repeatCount=\"indefinite\" values=\"1;0\" begin=\"-0.75s\"/>\n  </circle>\n  </g>\n  </g><g transform=\"translate(50,75)\">\n  <g transform=\"rotate(90)\">\n  <circle cx=\"0\" cy=\"0\" r=\"5\" fill=\"#e55f3b\" fill-opacity=\"0.75\">\n    <animateTransform attributeName=\"transform\" type=\"scale\" begin=\"-0.625s\" values=\"1.5 1.5;1 1\" keyTimes=\"0;1\" dur=\"1s\" repeatCount=\"indefinite\"/>\n    <animate attributeName=\"fill-opacity\" keyTimes=\"0;1\" dur=\"1s\" repeatCount=\"indefinite\" values=\"1;0\" begin=\"-0.625s\"/>\n  </circle>\n  </g>\n  </g><g transform=\"translate(32.32233047033631,67.67766952966369)\">\n  <g transform=\"rotate(135)\">\n  <circle cx=\"0\" cy=\"0\" r=\"5\" fill=\"#e55f3b\" fill-opacity=\"0.625\">\n    <animateTransform attributeName=\"transform\" type=\"scale\" begin=\"-0.5s\" values=\"1.5 1.5;1 1\" keyTimes=\"0;1\" dur=\"1s\" repeatCount=\"indefinite\"/>\n    <animate attributeName=\"fill-opacity\" keyTimes=\"0;1\" dur=\"1s\" repeatCount=\"indefinite\" values=\"1;0\" begin=\"-0.5s\"/>\n  </circle>\n  </g>\n  </g><g transform=\"translate(25,50)\">\n  <g transform=\"rotate(180)\">\n  <circle cx=\"0\" cy=\"0\" r=\"5\" fill=\"#e55f3b\" fill-opacity=\"0.5\">\n    <animateTransform attributeName=\"transform\" type=\"scale\" begin=\"-0.375s\" values=\"1.5 1.5;1 1\" keyTimes=\"0;1\" dur=\"1s\" repeatCount=\"indefinite\"/>\n    <animate attributeName=\"fill-opacity\" keyTimes=\"0;1\" dur=\"1s\" repeatCount=\"indefinite\" values=\"1;0\" begin=\"-0.375s\"/>\n  </circle>\n  </g>\n  </g><g transform=\"translate(32.32233047033631,32.32233047033631)\">\n  <g transform=\"rotate(225)\">\n  <circle cx=\"0\" cy=\"0\" r=\"5\" fill=\"#e55f3b\" fill-opacity=\"0.375\">\n    <animateTransform attributeName=\"transform\" type=\"scale\" begin=\"-0.25s\" values=\"1.5 1.5;1 1\" keyTimes=\"0;1\" dur=\"1s\" repeatCount=\"indefinite\"/>\n    <animate attributeName=\"fill-opacity\" keyTimes=\"0;1\" dur=\"1s\" repeatCount=\"indefinite\" values=\"1;0\" begin=\"-0.25s\"/>\n  </circle>\n  </g>\n  </g><g transform=\"translate(49.99999999999999,25)\">\n  <g transform=\"rotate(270)\">\n  <circle cx=\"0\" cy=\"0\" r=\"5\" fill=\"#e55f3b\" fill-opacity=\"0.25\">\n    <animateTransform attributeName=\"transform\" type=\"scale\" begin=\"-0.125s\" values=\"1.5 1.5;1 1\" keyTimes=\"0;1\" dur=\"1s\" repeatCount=\"indefinite\"/>\n    <animate attributeName=\"fill-opacity\" keyTimes=\"0;1\" dur=\"1s\" repeatCount=\"indefinite\" values=\"1;0\" begin=\"-0.125s\"/>\n  </circle>\n  </g>\n  </g><g transform=\"translate(67.67766952966369,32.32233047033631)\">\n  <g transform=\"rotate(315)\">\n  <circle cx=\"0\" cy=\"0\" r=\"5\" fill=\"#e55f3b\" fill-opacity=\"0.125\">\n    <animateTransform attributeName=\"transform\" type=\"scale\" begin=\"0s\" values=\"1.5 1.5;1 1\" keyTimes=\"0;1\" dur=\"1s\" repeatCount=\"indefinite\"/>\n    <animate attributeName=\"fill-opacity\" keyTimes=\"0;1\" dur=\"1s\" repeatCount=\"indefinite\" values=\"1;0\" begin=\"0s\"/>\n  </circle>\n  </g>\n  </g>\n  <!-- [ldio] generated by https://loading.io/ --></svg>\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: SpinnerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'fit-spinner',
                    templateUrl: './spinner.component.html',
                }]
        }], ctorParameters: function () { return []; } });

class AnalysisGraphComponent {
    constructor(uar) {
        this.uar = uar;
        this.showSpinner = true;
        this.entries = null;
        this.isLoading = true;
    }
    ngOnChanges() {
        return __awaiter(this, void 0, void 0, function* () {
            this.entries = null;
            this.id = `fit-{{${this.type}}}-graph`;
            if (!this.uid)
                return;
            this.isLoading = true;
            this.entries = yield this.uar.getLatestEntries(this.uid, this.type, 7);
            this.isLoading = false;
            this.renderGraph(this.entries);
        });
    }
    renderGraph(entries) {
        if (!document.getElementById(this.id)) {
            setTimeout(() => { this.renderGraph(entries); }, 50);
            return;
        }
        if (this.type == 'measurement') {
            entries.forEach((e, idx) => entries[idx] = Object.assign({ date: e.date }, e.value));
            multiLineGraph(this.id, entries);
        }
        else {
            if (this.type == 'sleep') {
                entries.forEach((e, idx) => entries[idx] = Object.assign({ date: e.date, value: e.value.sleepHrs }));
            }
            singleLineGraph(this.id, entries);
        }
    }
}
AnalysisGraphComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: AnalysisGraphComponent, deps: [{ token: UserAnalysisResource }], target: i0.ɵɵFactoryTarget.Component });
AnalysisGraphComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.7", type: AnalysisGraphComponent, selector: "fit-analysis-graph", inputs: { uid: "uid", type: "type", showSpinner: "showSpinner" }, usesOnChanges: true, ngImport: i0, template: "<fit-spinner *ngIf=\"isLoading && showSpinner\"></fit-spinner>\n<ng-container *ngIf=\"!isLoading\">\n  <p style=\"text-align: center;\" *ngIf=\"!entries?.length\">\n    Please update some values\n  </p>\n  <div\n    *ngIf=\"entries?.length\"\n    [id]=\"id\"\n    style=\"width: 100%; height: 400px\"\n  ></div>\n</ng-container>\n", components: [{ type: SpinnerComponent, selector: "fit-spinner" }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: AnalysisGraphComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'fit-analysis-graph',
                    templateUrl: './analysis-graph.component.html',
                }]
        }], ctorParameters: function () { return [{ type: UserAnalysisResource }]; }, propDecorators: { uid: [{
                type: Input
            }], type: [{
                type: Input
            }], showSpinner: [{
                type: Input
            }] } });

class SpinnerModule {
}
SpinnerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: SpinnerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SpinnerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: SpinnerModule, declarations: [SpinnerComponent], imports: [CommonModule], exports: [SpinnerComponent] });
SpinnerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: SpinnerModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: SpinnerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [SpinnerComponent],
                    imports: [
                        CommonModule
                    ],
                    exports: [SpinnerComponent]
                }]
        }] });

class AnalysisGraphModule {
}
AnalysisGraphModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: AnalysisGraphModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AnalysisGraphModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: AnalysisGraphModule, declarations: [AnalysisGraphComponent], imports: [CommonModule,
        SpinnerModule], exports: [AnalysisGraphComponent] });
AnalysisGraphModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: AnalysisGraphModule, imports: [[
            CommonModule,
            SpinnerModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: AnalysisGraphModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [AnalysisGraphComponent],
                    imports: [
                        CommonModule,
                        SpinnerModule,
                    ],
                    exports: [AnalysisGraphComponent]
                }]
        }] });

class OauthResource {
    constructor(config, httpClient) {
        this.config = config;
        this.httpClient = httpClient;
    }
    registerUser(credentials) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpClient.post(`${this.config.API_URL}/oauth/register`, credentials).toPromise();
        });
    }
    getUser(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            const ud = yield this.httpClient.get(`${this.config.API_URL}/users/${uid}`).toPromise();
            return ud;
        });
    }
    updateUser(uid, userDict) {
        return __awaiter(this, void 0, void 0, function* () {
            const ud = yield this.httpClient.post(`${this.config.API_URL}/oauth/updateuser/${uid}`, userDict).toPromise();
            return ud;
        });
    }
    updateSubscription(uid, plan, razorpay_payment_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const update = {
                subscription: {
                    planName: plan.name,
                    discount: plan.discount,
                    startdate: moment().format('YYYYMMDD'),
                    price: plan.price,
                    trasactionId: razorpay_payment_id
                },
                subscription_duration: plan.validity,
                // TODO: fix it
                subscription_endDate: moment().add(plan.validity, 'months').format('YYYYMMDD'),
                subscription_status: 'Existing',
            };
            const ud = this.httpClient.put(`${this.config.API_URL}/users/${uid}`, update).toPromise();
            return ud;
        });
    }
}
OauthResource.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: OauthResource, deps: [{ token: ngxFiteloConfig }, { token: i1$1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
OauthResource.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: OauthResource, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: OauthResource, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [ngxFiteloConfig]
                }] }, { type: i1$1.HttpClient }]; } });

class PaymentsResource {
    constructor(httpClient, config) {
        this.httpClient = httpClient;
        this.config = config;
    }
    createOrder(plan) {
        return this.httpClient.post(`${this.config.API_URL}/payments/createorder`, { "amount": plan.price * 100 }).toPromise();
    }
    verify(requestBody) {
        return this.httpClient.post(`${this.config.API_URL}/payments/verify`, requestBody).toPromise();
    }
}
PaymentsResource.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: PaymentsResource, deps: [{ token: i1$1.HttpClient }, { token: ngxFiteloConfig }], target: i0.ɵɵFactoryTarget.Injectable });
PaymentsResource.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: PaymentsResource, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: PaymentsResource, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1$1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [ngxFiteloConfig]
                }] }]; } });

class PlansResource {
    constructor(http, config) {
        this.http = http;
        this.config = config;
    }
    getPlans() {
        const url = `${this.config.API_URL}/plans`;
        return this.http.get(url).toPromise();
    }
}
PlansResource.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: PlansResource, deps: [{ token: i1$1.HttpClient }, { token: ngxFiteloConfig }], target: i0.ɵɵFactoryTarget.Injectable });
PlansResource.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: PlansResource, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: PlansResource, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1$1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [ngxFiteloConfig]
                }] }]; } });

class UserRoutineResource {
    constructor(config, http) {
        this.config = config;
        this.http = http;
    }
    getRoutine(id, date) {
        return __awaiter(this, void 0, void 0, function* () {
            let data;
            try {
                data = yield this.http.get(`${this.config.API_URL}/users/${id}/routines/${date}`).toPromise();
            }
            catch (e) {
                data = null;
            }
            return data;
        });
    }
    updateRoutine(id, date, mealId, value) {
        return __awaiter(this, void 0, void 0, function* () {
            let payload = value;
            date = moment(date).format('YYYY-MM-DD');
            const httpOptions = {
                headers: new HttpHeaders({
                    'Content-Type': 'text/plain',
                    Authorization: 'my-auth-token'
                })
            };
            const url = `${this.config.API_URL}/users/${id}/routines/${date}/mealtaken/${mealId}`;
            return this.http.put(url, payload, httpOptions).toPromise();
        });
    }
    getGroceries(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let fiterparam = new HttpParams().set('filters', JSON.stringify(this.getFilersArray()));
            const res = yield this.http.get(`${this.config.API_URL}/users/${id}/routines`, { params: fiterparam }).toPromise();
            let routine = res.data;
            let newgroceriesDict = {};
            routine.forEach((val) => {
                val.mealDicts.forEach((meal) => {
                    meal.recipeDicts.forEach((recipe) => {
                        if (recipe.groceryDicts) {
                            recipe.groceryDicts.forEach((grocery) => {
                                newgroceriesDict[grocery.id] = grocery;
                            });
                        }
                    });
                });
            });
            return Object.values(newgroceriesDict);
        });
    }
    getFilersArray() {
        const today = moment().format("YYYYMMDD");
        let filersArray = [
            {
                "field": "date",
                "operator": ">=",
                "value": today,
            },
            {
                "field": "date",
                "operator": "<=",
                "value": moment().add(7, 'day').format("YYYYMMDD")
            }
        ];
        return filersArray;
    }
}
UserRoutineResource.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: UserRoutineResource, deps: [{ token: ngxFiteloConfig }, { token: i1$1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
UserRoutineResource.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: UserRoutineResource, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: UserRoutineResource, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [ngxFiteloConfig]
                }] }, { type: i1$1.HttpClient }]; } });

class CustomOptionsResource {
    constructor(firestore) {
        this.firestore = firestore;
    }
    getAllMedicalCondtions() {
        return __awaiter(this, void 0, void 0, function* () {
            const mc = (yield this.firestore.doc('customOptions/medicalConditions').get().toPromise()).data();
            return mc.value;
        });
    }
    saveAllMedicalCondtions(medicalConditions) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.firestore.doc('customOptions/medicalConditions').set({ value: medicalConditions });
        });
    }
}
CustomOptionsResource.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: CustomOptionsResource, deps: [{ token: i1.AngularFirestore }], target: i0.ɵɵFactoryTarget.Injectable });
CustomOptionsResource.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: CustomOptionsResource, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: CustomOptionsResource, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.AngularFirestore }]; } });

class PushNotificationsResource {
    constructor(firestore) {
        this.firestore = firestore;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.firestore.collection('pushNotifications', q => q.orderBy('timestamp', 'desc')).get().toPromise()).docs.map(d => d.data());
        });
    }
}
PushNotificationsResource.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: PushNotificationsResource, deps: [{ token: i1.AngularFirestore }], target: i0.ɵɵFactoryTarget.Injectable });
PushNotificationsResource.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: PushNotificationsResource, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: PushNotificationsResource, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.AngularFirestore }]; } });

class UserDiaryResource {
    constructor(firestore) {
        this.firestore = firestore;
    }
    doc(uid) {
        return this.firestore.doc(`usersDiary/${uid}`);
    }
    fetchUserDiaryData(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.doc(uid).get().toPromise()).data();
        });
    }
    updateUserDiary(uid, userDiaryData) {
        return this.doc(uid).set(userDiaryData);
    }
}
UserDiaryResource.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: UserDiaryResource, deps: [{ token: i1.AngularFirestore }], target: i0.ɵɵFactoryTarget.Injectable });
UserDiaryResource.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: UserDiaryResource, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: UserDiaryResource, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.AngularFirestore }]; } });

class UsersPaymentResource {
    constructor(firestore) {
        this.firestore = firestore;
    }
    doc(uid) {
        return this.firestore.doc(`usersPayment/${uid}`);
    }
    updatePayment(uid, plan, request) {
        return __awaiter(this, void 0, void 0, function* () {
            let userPayment = (yield this.doc(uid).get().toPromise()).data();
            if (!userPayment) {
                userPayment = {
                    uid: uid,
                    data: []
                };
            }
            ;
            userPayment.data.push({
                date: moment().format('YYYY-MM-DD HH:mm:ss'),
                paymentId: request['paymentId'],
                orderId: request['orderId'],
                planId: plan.id,
            });
            return this.doc(uid).set(userPayment);
        });
    }
}
UsersPaymentResource.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: UsersPaymentResource, deps: [{ token: i1.AngularFirestore }], target: i0.ɵɵFactoryTarget.Injectable });
UsersPaymentResource.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: UsersPaymentResource, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: UsersPaymentResource, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.AngularFirestore }]; } });

class UserNotificationsResource {
    constructor(firestore) {
        this.firestore = firestore;
    }
    doc(uid) {
        return this.firestore.doc(`userNotifications/${uid}`);
    }
    getUserRemindersDict(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            let un = (yield this.doc(uid).get().toPromise()).data();
            if (!un || !un.remindersDict)
                return null;
            return un.remindersDict;
        });
    }
    getUserReminderDict(uid, type) {
        return __awaiter(this, void 0, void 0, function* () {
            let un = (yield this.doc(uid).get().toPromise()).data();
            if (!un || !un.remindersDict)
                return null;
            return type ? un.remindersDict[type + 'ReminderDict'] : un.remindersDict;
        });
    }
    saveUserReminderDict(uid, type, reminderDict) {
        return __awaiter(this, void 0, void 0, function* () {
            let un = (yield this.doc(uid).get().toPromise()).data();
            if (!un)
                un = {};
            if (!un.remindersDict)
                un.remindersDict = {};
            un.remindersDict[type + 'ReminderDict'] = reminderDict;
            return this.doc(uid).set(un);
        });
    }
    getUserMedicineReminderDict(uid, idx) {
        return __awaiter(this, void 0, void 0, function* () {
            let un = (yield this.doc(uid).get().toPromise()).data();
            if (!un || !un.remindersDict)
                return null;
            return un.remindersDict['medicineReminderDicts'][idx];
        });
    }
    saveUserMedicineReminder(uid, idx, reminderDict) {
        return __awaiter(this, void 0, void 0, function* () {
            let un = (yield this.doc(uid).get().toPromise()).data();
            if (!un)
                un = {};
            if (!un.remindersDict)
                un.remindersDict = {};
            if (!un.remindersDict.medicineReminderDicts)
                un.remindersDict.medicineReminderDicts = [];
            if (idx === null)
                un.remindersDict.medicineReminderDicts.push(reminderDict);
            else
                un.remindersDict.medicineReminderDicts[idx] = reminderDict;
            return this.doc(uid).set(un);
        });
    }
}
UserNotificationsResource.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: UserNotificationsResource, deps: [{ token: i1.AngularFirestore }], target: i0.ɵɵFactoryTarget.Injectable });
UserNotificationsResource.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: UserNotificationsResource, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: UserNotificationsResource, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.AngularFirestore }]; } });

class UserGuidelinesResource {
    constructor(afs) {
        this.afs = afs;
    }
    getGuidelines(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = null;
            try {
                data = (yield this.afs.doc(`userGuidelines/${uid}`).get().toPromise()).data();
            }
            catch (e) {
            }
            return data;
        });
    }
}
UserGuidelinesResource.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: UserGuidelinesResource, deps: [{ token: i1.AngularFirestore }], target: i0.ɵɵFactoryTarget.Injectable });
UserGuidelinesResource.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: UserGuidelinesResource, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: UserGuidelinesResource, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.AngularFirestore }]; } });

class StorageResource {
    constructor(afStorage) {
        this.afStorage = afStorage;
    }
    uploadUserProfilePic(uid, imageFile) {
        return __awaiter(this, void 0, void 0, function* () {
            const path = `users/${uid}/profilePic`;
            yield this.afStorage.upload(path, imageFile);
            return this.fetchUserProfilePicUrl(uid);
        });
    }
    fetchUserProfilePicUrl(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.afStorage.ref(`users/${uid}/profilePic`).getDownloadURL().toPromise();
        });
    }
    uploadUserFile(uid, type, file) {
        const unix = moment().unix();
        const path = `users/${uid}/${type}/${unix}`;
        const name = file['name'] ? file['name'] : type + '-' + Math.random().toString().slice(2);
        return this.afStorage.upload(path, file, {
            customMetadata: { name: `${name}` },
        });
    }
    fetchUserFiles(uid, type) {
        return __awaiter(this, void 0, void 0, function* () {
            const listResult = yield this.afStorage.ref(`users/${uid}/${type}`).listAll().toPromise();
            return this.fetchAdditionalData(listResult);
        });
    }
    fetchAdditionalData(listResult) {
        return __awaiter(this, void 0, void 0, function* () {
            let files = [];
            for (let i = 0; i < listResult.items.length; i++) {
                let fileRef = listResult.items[i];
                const results = yield Promise.all([fileRef.getMetadata(), fileRef.getDownloadURL()]);
                let file = {
                    Reference: fileRef,
                    name: results[0].customMetadata.name,
                    date: results[0].timeCreated,
                    mimeType: results[0].contentType,
                    url: results[1],
                };
                files.push(file);
            }
            return files.sort((a, b) => a.date > b.date ? -1 : 1);
        });
    }
}
StorageResource.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: StorageResource, deps: [{ token: i1$2.AngularFireStorage }], target: i0.ɵɵFactoryTarget.Injectable });
StorageResource.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: StorageResource, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: StorageResource, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1$2.AngularFireStorage }]; } });

class WordpressResource {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getHeroes() {
        return this.httpClient.get(`https://fitelo.co/wp-json/fitelo/v2/hero`)
            .pipe(map(data => {
            data['videoUrl'] = "https://www.youtube.com/embed/" + this.getId(data['videoUrl']);
            return data;
        })).toPromise();
    }
    getId(url) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11)
            ? match[2]
            : null;
    }
    getAllFeaturedBlogs() {
        return this.httpClient.get(`https://fitelo.co/wp-json/fitelo/v2/featured-blogs`).toPromise();
    }
    getContentCategories() {
        return this.httpClient.get('https://fitelo.co/wp-json/fitelo/v2/content-categories').toPromise();
    }
    getCategoryBlogs(catId) {
        return __awaiter(this, void 0, void 0, function* () {
            const blogs = yield this.httpClient.get(`https://fitelo.co/wp-json/wp/v2/posts?categories=${catId}&_embed`).toPromise();
            return blogs.map(blog => {
                return {
                    title: blog["title"]["rendered"],
                    type: blog["type"],
                    desc: blog["excerpt"]["rendered"],
                    img: blog["_embedded"]["wp:featuredmedia"][0]["source_url"],
                    link: blog["link"]
                };
            });
        });
    }
    getVideoAndBlog(type) {
        return this.httpClient.get('https://fitelo.co/wp-json/fitelo/v2/' + type)
            .pipe(map(data => {
            data[0]['videoUrl'] = "https://www.youtube.com/embed/" + this.getId(data[0]['videoUrl']);
            return data;
        })).toPromise();
    }
    getInspired() {
        return this.httpClient.get(`https://fitelo.co/wp-json/fitelo/v2/get-inspired`).toPromise();
    }
    getFAQs() {
        return this.httpClient.get(`https://fitelo.co/wp-json/fitelo/v2/faqs`).toPromise();
    }
    getHealthyRecipes() {
        return this.httpClient.get(`https://fitelo.co/wp-json/fitelo/v2/healthy-recipes`).toPromise();
    }
}
WordpressResource.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: WordpressResource, deps: [{ token: i1$1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
WordpressResource.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: WordpressResource, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: WordpressResource, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1$1.HttpClient }]; } });

/*
 * Public API Surface of ngx-fitelo
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AnalysisGraphComponent, AnalysisGraphModule, CustomOptionsResource, NgxFiteloComponent, NgxFiteloModule, NgxFiteloService, OauthResource, PaymentsResource, PlansResource, PushNotificationsResource, StorageResource, UserAnalysisResource, UserDiaryResource, UserGuidelinesResource, UserNotificationsResource, UserRoutineResource, UsersPaymentResource, WordpressResource, defaultMeasurement, defaultSleep };
//# sourceMappingURL=ngx-fitelo.js.map

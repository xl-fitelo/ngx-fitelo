(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@amcharts/amcharts4/core'), require('@amcharts/amcharts4/charts'), require('moment'), require('@angular/fire/firestore'), require('@angular/common/http'), require('@angular/fire/storage'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('ngx-fitelo', ['exports', '@angular/core', '@angular/common', '@amcharts/amcharts4/core', '@amcharts/amcharts4/charts', 'moment', '@angular/fire/firestore', '@angular/common/http', '@angular/fire/storage', 'rxjs/operators'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["ngx-fitelo"] = {}, global.ng.core, global.ng.common, global.am4core, global.am4charts, global.moment, global.ng.fire.firestore, global.ng.common.http, global.ng.fire.storage, global.rxjs.operators));
})(this, (function (exports, i0, i3, am4core, am4charts, moment, i1, i1$1, i1$2, operators) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var am4core__namespace = /*#__PURE__*/_interopNamespace(am4core);
    var am4charts__namespace = /*#__PURE__*/_interopNamespace(am4charts);
    var moment__default = /*#__PURE__*/_interopDefaultLegacy(moment);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);
    var i1__namespace$2 = /*#__PURE__*/_interopNamespace(i1$2);

    var NgxFiteloService = /** @class */ (function () {
        function NgxFiteloService() {
        }
        return NgxFiteloService;
    }());
    NgxFiteloService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0__namespace, type: NgxFiteloService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    NgxFiteloService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0__namespace, type: NgxFiteloService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0__namespace, type: NgxFiteloService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var NgxFiteloComponent = /** @class */ (function () {
        function NgxFiteloComponent() {
        }
        NgxFiteloComponent.prototype.ngOnInit = function () {
        };
        return NgxFiteloComponent;
    }());
    NgxFiteloComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0__namespace, type: NgxFiteloComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    NgxFiteloComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.7", type: NgxFiteloComponent, selector: "lib-ngx-fitelo", ngImport: i0__namespace, template: "\n    <p>\n      ngx-fitelo works!\n    </p>\n  ", isInline: true });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0__namespace, type: NgxFiteloComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-ngx-fitelo',
                        template: "\n    <p>\n      ngx-fitelo works!\n    </p>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return []; } });

    var ngxFiteloConfig = new i0.InjectionToken('ngxFiteloConfig');

    var NgxFiteloModule = /** @class */ (function () {
        function NgxFiteloModule() {
        }
        NgxFiteloModule.forRoot = function (config) {
            return {
                ngModule: NgxFiteloModule,
                providers: [{ provide: ngxFiteloConfig, useValue: config }]
            };
        };
        return NgxFiteloModule;
    }());
    NgxFiteloModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0__namespace, type: NgxFiteloModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    NgxFiteloModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0__namespace, type: NgxFiteloModule, declarations: [NgxFiteloComponent], exports: [NgxFiteloComponent] });
    NgxFiteloModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0__namespace, type: NgxFiteloModule, imports: [[]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0__namespace, type: NgxFiteloModule, decorators: [{
                type: i0.NgModule,
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

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    function multiLineGraph(id, entries) {
        var chart = am4core__namespace.create(id, am4charts__namespace.XYChart);
        chart.paddingLeft = 0;
        // Add data
        chart.data = entries;
        chart.data.sort(function (a, b) {
            if (new Date(a.date) < new Date(b.date))
                return -1;
            if (new Date(a.date) > new Date(b.date))
                return 1;
            return 0;
        });
        // Create axes
        var dateAxis = chart.xAxes.push(new am4charts__namespace.DateAxis());
        dateAxis.fontSize = 10;
        dateAxis.minZoomCount = 5;
        dateAxis.renderer.grid.template.location = 0;
        dateAxis.renderer.minGridDistance = 45;
        dateAxis.dateFormats.setKey('day', 'dd MMM');
        // Create value axis
        var valueAxis = chart.yAxes.push(new am4charts__namespace.ValueAxis());
        valueAxis.fontSize = 10;
        // Create Series function
        function createSeries(field) {
            var lineSeries = chart.series.push(new am4charts__namespace.LineSeries());
            lineSeries.dataFields.valueY = "" + field;
            lineSeries.dataFields.dateX = 'date';
            lineSeries.fontSize = 10;
            lineSeries.strokeWidth = 1;
            // lineSeries.strokeDasharray = "";
            lineSeries.name = "" + field;
            // lineSeries.tensionX = 0.77;
            lineSeries.tooltipText = field + ": {valueY} inch(es)";
            lineSeries.tooltip.fontSize = 12;
            var bullet = lineSeries.bullets.push(new am4charts__namespace.CircleBullet());
            // bullet.disabled = true;
            // bullet.propertyFields.disabled = "disabled";
            bullet.circle.strokeWidth = 0;
            bullet.circle.radius = 2;
            bullet.circle.fill = am4core__namespace.color('#6270DD');
            return lineSeries;
        }
        var arm = createSeries('arm');
        var chest = createSeries('chest');
        var stomach = createSeries('stomach');
        var thigh = createSeries('thigh');
        var waist = createSeries('waist');
        var hips = createSeries('hips');
        chart.cursor = new am4charts__namespace.XYCursor();
        chart.cursor.behavior = 'none';
        chart.cursor.xAxis = dateAxis;
        chart.cursor.snapToSeries = [arm, chest, waist, stomach, thigh, hips];
        chart.legend = new am4charts__namespace.Legend();
        chart.legend.position = 'bottom';
    }

    function singleLineGraph(id, entries) {
        var chart = am4core__namespace.create(id, am4charts__namespace.XYChart);
        chart.paddingLeft = 0;
        chart.data = entries;
        // Create axes
        var dateAxis = chart.xAxes.push(new am4charts__namespace.DateAxis());
        dateAxis.fontSize = 10;
        dateAxis.minZoomCount = 5;
        dateAxis.renderer.grid.template.location = 0;
        dateAxis.renderer.minGridDistance = 45;
        dateAxis.dateFormats.setKey('day', 'dd MMM');
        dateAxis.tooltip.fontSize = 12;
        // Create value axis
        var valueAxis = chart.yAxes.push(new am4charts__namespace.ValueAxis());
        valueAxis.fontSize = 10;
        valueAxis.extraTooltipPrecision = 2;
        valueAxis.tooltip.fontSize = 12;
        // Create series
        var lineSeries = chart.series.push(new am4charts__namespace.LineSeries());
        lineSeries.dataFields.valueY = 'value';
        lineSeries.dataFields.dateX = 'date';
        lineSeries.fontSize = 10;
        lineSeries.strokeWidth = 1.5;
        lineSeries.strokeDasharray = '4';
        lineSeries.stroke = am4core__namespace.color('#E55F3B');
        // Add simple bullet
        var bullet = lineSeries.bullets.push(new am4charts__namespace.CircleBullet());
        // bullet.disabled = true;
        // bullet.propertyFields.disabled = "disabled";
        bullet.circle.strokeWidth = 0;
        bullet.circle.radius = 2;
        bullet.circle.fill = am4core__namespace.color('#6270DD');
        var secondCircle = bullet.createChild(am4core__namespace.Circle);
        secondCircle.radius = 3;
        secondCircle.fill = am4core__namespace.color('#6270DD');
        secondCircle.strokeWidth = 0;
        chart.cursor = new am4charts__namespace.XYCursor();
        chart.cursor.behavior = 'none';
        chart.cursor.xAxis = dateAxis;
        chart.cursor.snapToSeries = lineSeries;
    }

    var UserAnalysisResource = /** @class */ (function () {
        function UserAnalysisResource(firestore) {
            this.firestore = firestore;
        }
        UserAnalysisResource.prototype.getUserAnalysis = function (uid) {
            return __awaiter(this, void 0, void 0, function () {
                var userAnalysis, e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            userAnalysis = null;
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.firestore.doc("usersanalysis/" + uid).get().toPromise()];
                        case 2:
                            userAnalysis = (_a.sent()).data();
                            return [3 /*break*/, 4];
                        case 3:
                            e_1 = _a.sent();
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/, userAnalysis];
                    }
                });
            });
        };
        UserAnalysisResource.prototype.getLatestEntry = function (uid, type) {
            return __awaiter(this, void 0, void 0, function () {
                var userAnalysis;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getUserAnalysis(uid)];
                        case 1:
                            userAnalysis = _a.sent();
                            return [2 /*return*/, this.findLatestEntry(userAnalysis, type)];
                    }
                });
            });
        };
        UserAnalysisResource.prototype.findLatestEntry = function (userAnalysis, type) {
            if (!userAnalysis) {
                if (type == 'measurement')
                    return defaultMeasurement;
                if (type == 'sleep')
                    return defaultSleep;
                return 0;
            }
            var latestEntry = 0;
            if (type == 'measurement')
                latestEntry = defaultMeasurement;
            if (type == 'sleep')
                latestEntry = defaultSleep;
            Object.values(userAnalysis.data).forEach(function (entry) {
                if (entry[type])
                    latestEntry = entry[type];
            });
            return latestEntry;
        };
        UserAnalysisResource.prototype.getLatestEntries = function (uid, type, howMany) {
            if (howMany === void 0) { howMany = 7; }
            return __awaiter(this, void 0, void 0, function () {
                var userAnalysis;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getUserAnalysis(uid)];
                        case 1:
                            userAnalysis = _a.sent();
                            return [2 /*return*/, this.findLatestEntries(userAnalysis, type, howMany)];
                    }
                });
            });
        };
        UserAnalysisResource.prototype.findLatestEntries = function (userAnalysis, type, howMany) {
            if (howMany === void 0) { howMany = 7; }
            if (!userAnalysis || !userAnalysis.data) {
                return [];
            }
            var latestEntries = [];
            Object.keys(userAnalysis.data).forEach(function (date) {
                var entry = userAnalysis.data[date];
                if (entry[type])
                    latestEntries.push({ date: date, value: entry[type] });
            });
            return latestEntries.sort(function (a, b) { return a.date > b.date ? -1 : 1; }).slice(0, howMany).sort(function (a, b) { return a.date < b.date ? -1 : 1; });
        };
        UserAnalysisResource.prototype.saveWeightAndMeasurement = function (uid, date, weight, measurement) {
            return __awaiter(this, void 0, void 0, function () {
                var newUserAnalysis, userAnalysis;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            newUserAnalysis = {};
                            return [4 /*yield*/, this.getUserAnalysis(uid)];
                        case 1:
                            userAnalysis = _b.sent();
                            if (!userAnalysis) {
                                newUserAnalysis = {
                                    data: (_a = {},
                                        _a[date] = {
                                            measurement: measurement,
                                            weight: weight
                                        },
                                        _a),
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
                            return [2 /*return*/, this.firestore.doc("usersanalysis/" + uid).set(newUserAnalysis)];
                    }
                });
            });
        };
        UserAnalysisResource.prototype.saveWater = function (uid, date, water) {
            return __awaiter(this, void 0, void 0, function () {
                var newUserAnalysis, userAnalysis;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            newUserAnalysis = {};
                            return [4 /*yield*/, this.getUserAnalysis(uid)];
                        case 1:
                            userAnalysis = _b.sent();
                            if (!userAnalysis) {
                                newUserAnalysis = {
                                    data: (_a = {},
                                        _a[date] = {
                                            water: water
                                        },
                                        _a),
                                    uid: uid,
                                };
                            }
                            else {
                                newUserAnalysis = userAnalysis;
                                if (!newUserAnalysis.data[date])
                                    newUserAnalysis.data[date] = {};
                                newUserAnalysis.data[date]['water'] = water;
                            }
                            return [2 /*return*/, this.firestore.doc("usersanalysis/" + uid).set(newUserAnalysis)];
                    }
                });
            });
        };
        UserAnalysisResource.prototype.saveSleep = function (uid, date, sleep) {
            return __awaiter(this, void 0, void 0, function () {
                var newUserAnalysis, userAnalysis;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            newUserAnalysis = {};
                            return [4 /*yield*/, this.getUserAnalysis(uid)];
                        case 1:
                            userAnalysis = _b.sent();
                            if (!userAnalysis) {
                                newUserAnalysis = {
                                    data: (_a = {},
                                        _a[date] = {
                                            sleep: sleep
                                        },
                                        _a),
                                    uid: uid,
                                };
                            }
                            else {
                                newUserAnalysis = userAnalysis;
                                if (!newUserAnalysis.data[date])
                                    newUserAnalysis.data[date] = {};
                                newUserAnalysis.data[date]['sleep'] = sleep;
                            }
                            return [2 /*return*/, this.firestore.doc("usersanalysis/" + uid).set(newUserAnalysis)];
                    }
                });
            });
        };
        return UserAnalysisResource;
    }());
    UserAnalysisResource.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0__namespace, type: UserAnalysisResource, deps: [{ token: i1__namespace.AngularFirestore }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    UserAnalysisResource.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0__namespace, type: UserAnalysisResource, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0__namespace, type: UserAnalysisResource, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace.AngularFirestore }]; } });
    var defaultMeasurement = {
        arm: 0,
        chest: 0,
        hips: 0,
        stomach: 0,
        thigh: 0,
        waist: 0,
    };
    var defaultSleep = {
        sleepHrs: 8,
        sleepTime: moment__default["default"](moment__default["default"]().format('YYYY-MM-DD') + ' 22:00').toISOString(),
        wakeupTime: moment__default["default"](moment__default["default"]().format('YYYY-MM-DD') + ' 06:00').toISOString()
    };

    var SpinnerComponent = /** @class */ (function () {
        function SpinnerComponent() {
        }
        SpinnerComponent.prototype.ngOnInit = function () { };
        return SpinnerComponent;
    }());
    SpinnerComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0__namespace, type: SpinnerComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    SpinnerComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.7", type: SpinnerComponent, selector: "fit-spinner", ngImport: i0__namespace, template: "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" style=\"margin: auto; background: none; display: block; shape-rendering: auto;\" width=\"41px\" height=\"41px\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\">\n  <g transform=\"translate(75,50)\">\n  <g transform=\"rotate(0)\">\n  <circle cx=\"0\" cy=\"0\" r=\"5\" fill=\"#e55f3b\" fill-opacity=\"1\">\n    <animateTransform attributeName=\"transform\" type=\"scale\" begin=\"-0.875s\" values=\"1.5 1.5;1 1\" keyTimes=\"0;1\" dur=\"1s\" repeatCount=\"indefinite\"/>\n    <animate attributeName=\"fill-opacity\" keyTimes=\"0;1\" dur=\"1s\" repeatCount=\"indefinite\" values=\"1;0\" begin=\"-0.875s\"/>\n  </circle>\n  </g>\n  </g><g transform=\"translate(67.67766952966369,67.67766952966369)\">\n  <g transform=\"rotate(45)\">\n  <circle cx=\"0\" cy=\"0\" r=\"5\" fill=\"#e55f3b\" fill-opacity=\"0.875\">\n    <animateTransform attributeName=\"transform\" type=\"scale\" begin=\"-0.75s\" values=\"1.5 1.5;1 1\" keyTimes=\"0;1\" dur=\"1s\" repeatCount=\"indefinite\"/>\n    <animate attributeName=\"fill-opacity\" keyTimes=\"0;1\" dur=\"1s\" repeatCount=\"indefinite\" values=\"1;0\" begin=\"-0.75s\"/>\n  </circle>\n  </g>\n  </g><g transform=\"translate(50,75)\">\n  <g transform=\"rotate(90)\">\n  <circle cx=\"0\" cy=\"0\" r=\"5\" fill=\"#e55f3b\" fill-opacity=\"0.75\">\n    <animateTransform attributeName=\"transform\" type=\"scale\" begin=\"-0.625s\" values=\"1.5 1.5;1 1\" keyTimes=\"0;1\" dur=\"1s\" repeatCount=\"indefinite\"/>\n    <animate attributeName=\"fill-opacity\" keyTimes=\"0;1\" dur=\"1s\" repeatCount=\"indefinite\" values=\"1;0\" begin=\"-0.625s\"/>\n  </circle>\n  </g>\n  </g><g transform=\"translate(32.32233047033631,67.67766952966369)\">\n  <g transform=\"rotate(135)\">\n  <circle cx=\"0\" cy=\"0\" r=\"5\" fill=\"#e55f3b\" fill-opacity=\"0.625\">\n    <animateTransform attributeName=\"transform\" type=\"scale\" begin=\"-0.5s\" values=\"1.5 1.5;1 1\" keyTimes=\"0;1\" dur=\"1s\" repeatCount=\"indefinite\"/>\n    <animate attributeName=\"fill-opacity\" keyTimes=\"0;1\" dur=\"1s\" repeatCount=\"indefinite\" values=\"1;0\" begin=\"-0.5s\"/>\n  </circle>\n  </g>\n  </g><g transform=\"translate(25,50)\">\n  <g transform=\"rotate(180)\">\n  <circle cx=\"0\" cy=\"0\" r=\"5\" fill=\"#e55f3b\" fill-opacity=\"0.5\">\n    <animateTransform attributeName=\"transform\" type=\"scale\" begin=\"-0.375s\" values=\"1.5 1.5;1 1\" keyTimes=\"0;1\" dur=\"1s\" repeatCount=\"indefinite\"/>\n    <animate attributeName=\"fill-opacity\" keyTimes=\"0;1\" dur=\"1s\" repeatCount=\"indefinite\" values=\"1;0\" begin=\"-0.375s\"/>\n  </circle>\n  </g>\n  </g><g transform=\"translate(32.32233047033631,32.32233047033631)\">\n  <g transform=\"rotate(225)\">\n  <circle cx=\"0\" cy=\"0\" r=\"5\" fill=\"#e55f3b\" fill-opacity=\"0.375\">\n    <animateTransform attributeName=\"transform\" type=\"scale\" begin=\"-0.25s\" values=\"1.5 1.5;1 1\" keyTimes=\"0;1\" dur=\"1s\" repeatCount=\"indefinite\"/>\n    <animate attributeName=\"fill-opacity\" keyTimes=\"0;1\" dur=\"1s\" repeatCount=\"indefinite\" values=\"1;0\" begin=\"-0.25s\"/>\n  </circle>\n  </g>\n  </g><g transform=\"translate(49.99999999999999,25)\">\n  <g transform=\"rotate(270)\">\n  <circle cx=\"0\" cy=\"0\" r=\"5\" fill=\"#e55f3b\" fill-opacity=\"0.25\">\n    <animateTransform attributeName=\"transform\" type=\"scale\" begin=\"-0.125s\" values=\"1.5 1.5;1 1\" keyTimes=\"0;1\" dur=\"1s\" repeatCount=\"indefinite\"/>\n    <animate attributeName=\"fill-opacity\" keyTimes=\"0;1\" dur=\"1s\" repeatCount=\"indefinite\" values=\"1;0\" begin=\"-0.125s\"/>\n  </circle>\n  </g>\n  </g><g transform=\"translate(67.67766952966369,32.32233047033631)\">\n  <g transform=\"rotate(315)\">\n  <circle cx=\"0\" cy=\"0\" r=\"5\" fill=\"#e55f3b\" fill-opacity=\"0.125\">\n    <animateTransform attributeName=\"transform\" type=\"scale\" begin=\"0s\" values=\"1.5 1.5;1 1\" keyTimes=\"0;1\" dur=\"1s\" repeatCount=\"indefinite\"/>\n    <animate attributeName=\"fill-opacity\" keyTimes=\"0;1\" dur=\"1s\" repeatCount=\"indefinite\" values=\"1;0\" begin=\"0s\"/>\n  </circle>\n  </g>\n  </g>\n  <!-- [ldio] generated by https://loading.io/ --></svg>\n" });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0__namespace, type: SpinnerComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'fit-spinner',
                        templateUrl: './spinner.component.html',
                    }]
            }], ctorParameters: function () { return []; } });

    var AnalysisGraphComponent = /** @class */ (function () {
        function AnalysisGraphComponent(uar) {
            this.uar = uar;
            this.showSpinner = true;
            this.entries = null;
            this.isLoading = true;
        }
        AnalysisGraphComponent.prototype.ngOnChanges = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            this.entries = null;
                            this.id = "fit-{{" + this.type + "}}-graph";
                            if (!this.uid)
                                return [2 /*return*/];
                            this.isLoading = true;
                            _a = this;
                            return [4 /*yield*/, this.uar.getLatestEntries(this.uid, this.type, 7)];
                        case 1:
                            _a.entries = _b.sent();
                            this.isLoading = false;
                            this.renderGraph(this.entries);
                            return [2 /*return*/];
                    }
                });
            });
        };
        AnalysisGraphComponent.prototype.renderGraph = function (entries) {
            var _this = this;
            if (!document.getElementById(this.id)) {
                setTimeout(function () { _this.renderGraph(entries); }, 50);
                return;
            }
            if (this.type == 'measurement') {
                entries.forEach(function (e, idx) { return entries[idx] = Object.assign({ date: e.date }, e.value); });
                multiLineGraph(this.id, entries);
            }
            else {
                if (this.type == 'sleep') {
                    entries.forEach(function (e, idx) { return entries[idx] = Object.assign({ date: e.date, value: e.value.sleepHrs }); });
                }
                singleLineGraph(this.id, entries);
            }
        };
        return AnalysisGraphComponent;
    }());
    AnalysisGraphComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0__namespace, type: AnalysisGraphComponent, deps: [{ token: UserAnalysisResource }], target: i0__namespace.ɵɵFactoryTarget.Component });
    AnalysisGraphComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.7", type: AnalysisGraphComponent, selector: "fit-analysis-graph", inputs: { uid: "uid", type: "type", showSpinner: "showSpinner" }, usesOnChanges: true, ngImport: i0__namespace, template: "<fit-spinner *ngIf=\"isLoading && showSpinner\"></fit-spinner>\n<ng-container *ngIf=\"!isLoading\">\n  <p style=\"text-align: center;\" *ngIf=\"!entries?.length\">\n    Please update some values\n  </p>\n  <div\n    *ngIf=\"entries?.length\"\n    [id]=\"id\"\n    style=\"width: 100%; height: 400px\"\n  ></div>\n</ng-container>\n", components: [{ type: SpinnerComponent, selector: "fit-spinner" }], directives: [{ type: i3__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0__namespace, type: AnalysisGraphComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'fit-analysis-graph',
                        templateUrl: './analysis-graph.component.html',
                    }]
            }], ctorParameters: function () { return [{ type: UserAnalysisResource }]; }, propDecorators: { uid: [{
                    type: i0.Input
                }], type: [{
                    type: i0.Input
                }], showSpinner: [{
                    type: i0.Input
                }] } });

    var SpinnerModule = /** @class */ (function () {
        function SpinnerModule() {
        }
        return SpinnerModule;
    }());
    SpinnerModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0__namespace, type: SpinnerModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    SpinnerModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0__namespace, type: SpinnerModule, declarations: [SpinnerComponent], imports: [i3.CommonModule], exports: [SpinnerComponent] });
    SpinnerModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0__namespace, type: SpinnerModule, imports: [[
                i3.CommonModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0__namespace, type: SpinnerModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [SpinnerComponent],
                        imports: [
                            i3.CommonModule
                        ],
                        exports: [SpinnerComponent]
                    }]
            }] });

    var AnalysisGraphModule = /** @class */ (function () {
        function AnalysisGraphModule() {
        }
        return AnalysisGraphModule;
    }());
    AnalysisGraphModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0__namespace, type: AnalysisGraphModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    AnalysisGraphModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0__namespace, type: AnalysisGraphModule, declarations: [AnalysisGraphComponent], imports: [i3.CommonModule,
            SpinnerModule], exports: [AnalysisGraphComponent] });
    AnalysisGraphModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0__namespace, type: AnalysisGraphModule, imports: [[
                i3.CommonModule,
                SpinnerModule,
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0__namespace, type: AnalysisGraphModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [AnalysisGraphComponent],
                        imports: [
                            i3.CommonModule,
                            SpinnerModule,
                        ],
                        exports: [AnalysisGraphComponent]
                    }]
            }] });

    var OauthResource = /** @class */ (function () {
        function OauthResource(config, httpClient) {
            this.config = config;
            this.httpClient = httpClient;
        }
        OauthResource.prototype.registerUser = function (credentials) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.httpClient.post(this.config.API_URL + "/oauth/register", credentials).toPromise()];
                });
            });
        };
        OauthResource.prototype.getUser = function (uid) {
            return __awaiter(this, void 0, void 0, function () {
                var ud;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.httpClient.get(this.config.API_URL + "/users/" + uid).toPromise()];
                        case 1:
                            ud = _a.sent();
                            return [2 /*return*/, ud];
                    }
                });
            });
        };
        OauthResource.prototype.updateUser = function (uid, userDict) {
            return __awaiter(this, void 0, void 0, function () {
                var ud;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.httpClient.post(this.config.API_URL + "/oauth/updateuser/" + uid, userDict).toPromise()];
                        case 1:
                            ud = _a.sent();
                            return [2 /*return*/, ud];
                    }
                });
            });
        };
        OauthResource.prototype.updateSubscription = function (uid, plan, razorpay_payment_id) {
            return __awaiter(this, void 0, void 0, function () {
                var update, ud;
                return __generator(this, function (_a) {
                    update = {
                        subscription: {
                            planName: plan.name,
                            discount: plan.discount,
                            startdate: moment__default["default"]().format('YYYYMMDD'),
                            price: plan.price,
                            trasactionId: razorpay_payment_id
                        },
                        subscription_duration: plan.validity,
                        // TODO: fix it
                        subscription_endDate: moment__default["default"]().add(plan.validity, 'months').format('YYYYMMDD'),
                        subscription_status: 'Existing',
                    };
                    ud = this.httpClient.put(this.config.API_URL + "/users/" + uid, update).toPromise();
                    return [2 /*return*/, ud];
                });
            });
        };
        return OauthResource;
    }());
    OauthResource.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0__namespace, type: OauthResource, deps: [{ token: ngxFiteloConfig }, { token: i1__namespace$1.HttpClient }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    OauthResource.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0__namespace, type: OauthResource, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0__namespace, type: OauthResource, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], ctorParameters: function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [ngxFiteloConfig]
                        }] }, { type: i1__namespace$1.HttpClient }];
        } });

    var PaymentsResource = /** @class */ (function () {
        function PaymentsResource(httpClient, config) {
            this.httpClient = httpClient;
            this.config = config;
        }
        PaymentsResource.prototype.createOrder = function (plan) {
            return this.httpClient.post(this.config.API_URL + "/payments/createorder", { "amount": plan.price * 100 }).toPromise();
        };
        PaymentsResource.prototype.verify = function (requestBody) {
            return this.httpClient.post(this.config.API_URL + "/payments/verify", requestBody).toPromise();
        };
        return PaymentsResource;
    }());
    PaymentsResource.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0__namespace, type: PaymentsResource, deps: [{ token: i1__namespace$1.HttpClient }, { token: ngxFiteloConfig }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    PaymentsResource.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0__namespace, type: PaymentsResource, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0__namespace, type: PaymentsResource, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace$1.HttpClient }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [ngxFiteloConfig]
                        }] }];
        } });

    var PlansService = /** @class */ (function () {
        function PlansService(http, config) {
            this.http = http;
            this.config = config;
        }
        PlansService.prototype.getPlans = function () {
            var url = this.config.API_URL + "/plans";
            return this.http.get(url).toPromise();
        };
        return PlansService;
    }());
    PlansService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0__namespace, type: PlansService, deps: [{ token: i1__namespace$1.HttpClient }, { token: ngxFiteloConfig }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    PlansService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0__namespace, type: PlansService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0__namespace, type: PlansService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], ctorParameters: function () {
            return [{ type: i1__namespace$1.HttpClient }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [ngxFiteloConfig]
                        }] }];
        } });

    var CustomOptionsResource = /** @class */ (function () {
        function CustomOptionsResource(firestore) {
            this.firestore = firestore;
        }
        CustomOptionsResource.prototype.getAllMedicalCondtions = function () {
            return __awaiter(this, void 0, void 0, function () {
                var mc;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.firestore.doc('customOptions/medicalConditions').get().toPromise()];
                        case 1:
                            mc = (_a.sent()).data();
                            return [2 /*return*/, mc.value];
                    }
                });
            });
        };
        return CustomOptionsResource;
    }());
    CustomOptionsResource.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0__namespace, type: CustomOptionsResource, deps: [{ token: i1__namespace.AngularFirestore }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    CustomOptionsResource.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0__namespace, type: CustomOptionsResource, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0__namespace, type: CustomOptionsResource, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace.AngularFirestore }]; } });

    var UserDiaryResource = /** @class */ (function () {
        function UserDiaryResource(firestore) {
            this.firestore = firestore;
        }
        UserDiaryResource.prototype.doc = function (uid) {
            return this.firestore.doc("usersDiary/" + uid);
        };
        UserDiaryResource.prototype.fetchUserDiaryData = function (uid) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.doc(uid).get().toPromise()];
                        case 1: return [2 /*return*/, (_a.sent()).data()];
                    }
                });
            });
        };
        UserDiaryResource.prototype.updateUserDiary = function (uid, userDiaryData) {
            return this.doc(uid).set(userDiaryData);
        };
        return UserDiaryResource;
    }());
    UserDiaryResource.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0__namespace, type: UserDiaryResource, deps: [{ token: i1__namespace.AngularFirestore }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    UserDiaryResource.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0__namespace, type: UserDiaryResource, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0__namespace, type: UserDiaryResource, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace.AngularFirestore }]; } });

    var UsersPaymentResource = /** @class */ (function () {
        function UsersPaymentResource(firestore) {
            this.firestore = firestore;
        }
        UsersPaymentResource.prototype.doc = function (uid) {
            return this.firestore.doc("usersPayment/" + uid);
        };
        UsersPaymentResource.prototype.updatePayment = function (uid, plan, request) {
            return __awaiter(this, void 0, void 0, function () {
                var userPayment;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.doc(uid).get().toPromise()];
                        case 1:
                            userPayment = (_a.sent()).data();
                            if (!userPayment) {
                                userPayment = {
                                    uid: uid,
                                    data: []
                                };
                            }
                            ;
                            userPayment.data.push({
                                date: moment__default["default"]().format('YYYY-MM-DD HH:mm:ss'),
                                paymentId: request['paymentId'],
                                orderId: request['orderId'],
                                planId: plan.id,
                            });
                            return [2 /*return*/, this.doc(uid).set(userPayment)];
                    }
                });
            });
        };
        return UsersPaymentResource;
    }());
    UsersPaymentResource.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0__namespace, type: UsersPaymentResource, deps: [{ token: i1__namespace.AngularFirestore }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    UsersPaymentResource.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0__namespace, type: UsersPaymentResource, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0__namespace, type: UsersPaymentResource, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace.AngularFirestore }]; } });

    var UsersResource = /** @class */ (function () {
        function UsersResource(firestore) {
            this.firestore = firestore;
        }
        UsersResource.prototype.getUser = function (uid) {
            return __awaiter(this, void 0, void 0, function () {
                var user;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.firestore.doc("users/" + uid).get().toPromise()];
                        case 1:
                            user = (_a.sent()).data();
                            return [2 /*return*/, user];
                    }
                });
            });
        };
        return UsersResource;
    }());
    UsersResource.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0__namespace, type: UsersResource, deps: [{ token: i1__namespace.AngularFirestore }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    UsersResource.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0__namespace, type: UsersResource, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0__namespace, type: UsersResource, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace.AngularFirestore }]; } });

    var StorageResource = /** @class */ (function () {
        function StorageResource(afStorage) {
            this.afStorage = afStorage;
        }
        StorageResource.prototype.uploadUserProfilePic = function (uid, imageFile) {
            return __awaiter(this, void 0, void 0, function () {
                var path;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            path = "users/" + uid + "/profilePic";
                            return [4 /*yield*/, this.afStorage.upload(path, imageFile)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, this.fetchUserProfilePicUrl(uid)];
                    }
                });
            });
        };
        StorageResource.prototype.fetchUserProfilePicUrl = function (uid) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.afStorage.ref("users/" + uid + "/profilePic").getDownloadURL().toPromise()];
                });
            });
        };
        StorageResource.prototype.uploadUserFile = function (uid, type, file) {
            var unix = moment__default["default"]().unix();
            var path = "users/" + uid + "/" + type + "/" + unix;
            return this.afStorage.upload(path, file, {
                customMetadata: { name: "" + file.name },
            });
        };
        StorageResource.prototype.fetchUserFiles = function (uid, type) {
            return __awaiter(this, void 0, void 0, function () {
                var listResult;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.afStorage.ref("users/" + uid + "/" + type).listAll().toPromise()];
                        case 1:
                            listResult = _a.sent();
                            return [2 /*return*/, this.fetchAdditionalData(listResult)];
                    }
                });
            });
        };
        StorageResource.prototype.fetchAdditionalData = function (listResult) {
            return __awaiter(this, void 0, void 0, function () {
                var files, i, fileRef, results, file;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            files = [];
                            i = 0;
                            _a.label = 1;
                        case 1:
                            if (!(i < listResult.items.length)) return [3 /*break*/, 4];
                            fileRef = listResult.items[i];
                            return [4 /*yield*/, Promise.all([fileRef.getMetadata(), fileRef.getDownloadURL()])];
                        case 2:
                            results = _a.sent();
                            file = {
                                Reference: fileRef,
                                name: results[0].customMetadata.name,
                                date: results[0].timeCreated,
                                mimeType: results[0].contentType,
                                url: results[1],
                            };
                            files.push(file);
                            _a.label = 3;
                        case 3:
                            i++;
                            return [3 /*break*/, 1];
                        case 4: return [2 /*return*/, files.sort(function (a, b) { return a.date > b.date ? -1 : 1; })];
                    }
                });
            });
        };
        return StorageResource;
    }());
    StorageResource.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0__namespace, type: StorageResource, deps: [{ token: i1__namespace$2.AngularFireStorage }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    StorageResource.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0__namespace, type: StorageResource, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0__namespace, type: StorageResource, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$2.AngularFireStorage }]; } });

    var WordpressResource = /** @class */ (function () {
        function WordpressResource(httpClient) {
            this.httpClient = httpClient;
        }
        WordpressResource.prototype.getHeroes = function () {
            var _this = this;
            return this.httpClient.get("https://fitelo.co/wp-json/fitelo/v2/hero")
                .pipe(operators.map(function (data) {
                data['videoUrl'] = "https://www.youtube.com/embed/" + _this.getId(data['videoUrl']);
                return data;
            })).toPromise();
        };
        WordpressResource.prototype.getId = function (url) {
            var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
            var match = url.match(regExp);
            return (match && match[2].length === 11)
                ? match[2]
                : null;
        };
        WordpressResource.prototype.getAllFeaturedBlogs = function () {
            return this.httpClient.get("https://fitelo.co/wp-json/fitelo/v2/featured-blogs").toPromise();
        };
        WordpressResource.prototype.getContentCategories = function () {
            return this.httpClient.get('https://fitelo.co/wp-json/fitelo/v2/content-categories').toPromise();
        };
        WordpressResource.prototype.getCategoryBlogs = function (catId) {
            return __awaiter(this, void 0, void 0, function () {
                var blogs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.httpClient.get("https://fitelo.co/wp-json/wp/v2/posts?categories=" + catId + "&_embed").toPromise()];
                        case 1:
                            blogs = _a.sent();
                            return [2 /*return*/, blogs.map(function (blog) {
                                    return {
                                        title: blog["title"]["rendered"],
                                        type: blog["type"],
                                        desc: blog["excerpt"]["rendered"],
                                        img: blog["_embedded"]["wp:featuredmedia"][0]["source_url"],
                                        link: blog["link"]
                                    };
                                })];
                    }
                });
            });
        };
        WordpressResource.prototype.getVideoAndBlog = function (type) {
            var _this = this;
            return this.httpClient.get('https://fitelo.co/wp-json/fitelo/v2/' + type)
                .pipe(operators.map(function (data) {
                data[0]['videoUrl'] = "https://www.youtube.com/embed/" + _this.getId(data[0]['videoUrl']);
                return data;
            })).toPromise();
        };
        WordpressResource.prototype.getInspired = function () {
            return this.httpClient.get("https://fitelo.co/wp-json/fitelo/v2/get-inspired").toPromise();
        };
        WordpressResource.prototype.getFAQs = function () {
            return this.httpClient.get("https://fitelo.co/wp-json/fitelo/v2/faqs").toPromise();
        };
        return WordpressResource;
    }());
    WordpressResource.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0__namespace, type: WordpressResource, deps: [{ token: i1__namespace$1.HttpClient }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    WordpressResource.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0__namespace, type: WordpressResource, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0__namespace, type: WordpressResource, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.HttpClient }]; } });

    /*
     * Public API Surface of ngx-fitelo
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AnalysisGraphComponent = AnalysisGraphComponent;
    exports.AnalysisGraphModule = AnalysisGraphModule;
    exports.CustomOptionsResource = CustomOptionsResource;
    exports.NgxFiteloComponent = NgxFiteloComponent;
    exports.NgxFiteloModule = NgxFiteloModule;
    exports.NgxFiteloService = NgxFiteloService;
    exports.OauthResource = OauthResource;
    exports.PaymentsResource = PaymentsResource;
    exports.PlansService = PlansService;
    exports.StorageResource = StorageResource;
    exports.UserAnalysisResource = UserAnalysisResource;
    exports.UserDiaryResource = UserDiaryResource;
    exports.UsersPaymentResource = UsersPaymentResource;
    exports.UsersResource = UsersResource;
    exports.WordpressResource = WordpressResource;
    exports.defaultMeasurement = defaultMeasurement;
    exports.defaultSleep = defaultSleep;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ngx-fitelo.umd.js.map

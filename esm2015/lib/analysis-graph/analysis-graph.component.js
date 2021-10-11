import { __awaiter } from "tslib";
import { Component, Input } from '@angular/core';
import { multiLineGraph } from './helpers/multi-line-graph';
import { singleLineGraph } from './helpers/single-line-graph';
import * as i0 from "@angular/core";
import * as i1 from "../resources/firestore/user-analysis.resource";
import * as i2 from "../spinner/spinner.component";
import * as i3 from "@angular/common";
export class AnalysisGraphComponent {
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
AnalysisGraphComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: AnalysisGraphComponent, deps: [{ token: i1.UserAnalysisResource }], target: i0.ɵɵFactoryTarget.Component });
AnalysisGraphComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.7", type: AnalysisGraphComponent, selector: "fit-analysis-graph", inputs: { uid: "uid", type: "type", showSpinner: "showSpinner" }, usesOnChanges: true, ngImport: i0, template: "<fit-spinner *ngIf=\"isLoading && showSpinner\"></fit-spinner>\n<ng-container *ngIf=\"!isLoading\">\n  <p style=\"text-align: center;\" *ngIf=\"!entries?.length\">\n    Please update some values\n  </p>\n  <div\n    *ngIf=\"entries?.length\"\n    [id]=\"id\"\n    style=\"width: 100%; height: 400px\"\n  ></div>\n</ng-container>\n", components: [{ type: i2.SpinnerComponent, selector: "fit-spinner" }], directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: AnalysisGraphComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'fit-analysis-graph',
                    templateUrl: './analysis-graph.component.html',
                }]
        }], ctorParameters: function () { return [{ type: i1.UserAnalysisResource }]; }, propDecorators: { uid: [{
                type: Input
            }], type: [{
                type: Input
            }], showSpinner: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5hbHlzaXMtZ3JhcGguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWZpdGVsby9zcmMvbGliL2FuYWx5c2lzLWdyYXBoL2FuYWx5c2lzLWdyYXBoLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1maXRlbG8vc3JjL2xpYi9hbmFseXNpcy1ncmFwaC9hbmFseXNpcy1ncmFwaC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFNUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzVELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7Ozs7QUFNOUQsTUFBTSxPQUFPLHNCQUFzQjtJQWlCakMsWUFDVSxHQUF5QjtRQUF6QixRQUFHLEdBQUgsR0FBRyxDQUFzQjtRQVRuQyxnQkFBVyxHQUFHLElBQUksQ0FBQTtRQUlsQixZQUFPLEdBQVEsSUFBSSxDQUFBO1FBRW5CLGNBQVMsR0FBRyxJQUFJLENBQUM7SUFJYixDQUFDO0lBRUMsV0FBVzs7WUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFJLENBQUMsRUFBRSxHQUFHLFNBQVMsSUFBSSxDQUFDLElBQUksVUFBVSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRztnQkFBRSxPQUFPO1lBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQTtZQUN0RSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqQyxDQUFDO0tBQUE7SUFFRCxXQUFXLENBQUMsT0FBTztRQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDckMsVUFBVSxDQUFDLEdBQUcsRUFBRSxHQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUEsQ0FBQSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDbEQsT0FBTztTQUNSO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLGFBQWEsRUFBRTtZQUM5QixPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2xGLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ2xDO2FBQ0k7WUFDSCxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksT0FBTyxFQUFFO2dCQUN4QixPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbkc7WUFDRCxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUNuQztJQUNILENBQUM7O21IQTlDVSxzQkFBc0I7dUdBQXRCLHNCQUFzQixpSkNUbkMsNFVBV0E7MkZERmEsc0JBQXNCO2tCQUpsQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFdBQVcsRUFBRSxpQ0FBaUM7aUJBQy9DOzJHQUlDLEdBQUc7c0JBREYsS0FBSztnQkFJTixJQUFJO3NCQURILEtBQUs7Z0JBSU4sV0FBVztzQkFEVixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVc2VyQW5hbHlzaXNSZXNvdXJjZSB9IGZyb20gJy4uL3Jlc291cmNlcy9maXJlc3RvcmUvdXNlci1hbmFseXNpcy5yZXNvdXJjZSc7XG5pbXBvcnQgeyBtdWx0aUxpbmVHcmFwaCB9IGZyb20gJy4vaGVscGVycy9tdWx0aS1saW5lLWdyYXBoJztcbmltcG9ydCB7IHNpbmdsZUxpbmVHcmFwaCB9IGZyb20gJy4vaGVscGVycy9zaW5nbGUtbGluZS1ncmFwaCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZpdC1hbmFseXNpcy1ncmFwaCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hbmFseXNpcy1ncmFwaC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEFuYWx5c2lzR3JhcGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpXG4gIHVpZDogc3RyaW5nXG5cbiAgQElucHV0KClcbiAgdHlwZTogJ3dlaWdodCcgfCAnbWVhc3VyZW1lbnQnIHwgJ3dhdGVyJyB8ICdzbGVlcCdcblxuICBASW5wdXQoKVxuICBzaG93U3Bpbm5lciA9IHRydWVcblxuICBpZDtcblxuICBlbnRyaWVzOiBhbnkgPSBudWxsXG5cbiAgaXNMb2FkaW5nID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHVhcjogVXNlckFuYWx5c2lzUmVzb3VyY2VcbiAgKSB7IH1cblxuICBhc3luYyBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLmVudHJpZXMgPSBudWxsO1xuICAgIHRoaXMuaWQgPSBgZml0LXt7JHt0aGlzLnR5cGV9fX0tZ3JhcGhgO1xuICAgIGlmICghdGhpcy51aWQpIHJldHVybjtcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5lbnRyaWVzID0gYXdhaXQgdGhpcy51YXIuZ2V0TGF0ZXN0RW50cmllcyh0aGlzLnVpZCwgdGhpcy50eXBlLCA3KVxuICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5yZW5kZXJHcmFwaCh0aGlzLmVudHJpZXMpO1xuICB9XG5cbiAgcmVuZGVyR3JhcGgoZW50cmllcykge1xuICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCkpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge3RoaXMucmVuZGVyR3JhcGgoZW50cmllcyl9LCA1MCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLnR5cGUgPT0gJ21lYXN1cmVtZW50Jykge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlLGlkeCkgPT4gZW50cmllc1tpZHhdID0gT2JqZWN0LmFzc2lnbih7ZGF0ZTogZS5kYXRlfSwgZS52YWx1ZSkpO1xuICAgICAgbXVsdGlMaW5lR3JhcGgodGhpcy5pZCwgZW50cmllcyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKHRoaXMudHlwZSA9PSAnc2xlZXAnKSB7XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZSxpZHgpID0+IGVudHJpZXNbaWR4XSA9IE9iamVjdC5hc3NpZ24oe2RhdGU6IGUuZGF0ZSwgdmFsdWU6IGUudmFsdWUuc2xlZXBIcnN9KSk7XG4gICAgICB9XG4gICAgICBzaW5nbGVMaW5lR3JhcGgodGhpcy5pZCwgZW50cmllcyk7XG4gICAgfVxuICB9XG5cbn1cbiIsIjxmaXQtc3Bpbm5lciAqbmdJZj1cImlzTG9hZGluZyAmJiBzaG93U3Bpbm5lclwiPjwvZml0LXNwaW5uZXI+XG48bmctY29udGFpbmVyICpuZ0lmPVwiIWlzTG9hZGluZ1wiPlxuICA8cCBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjtcIiAqbmdJZj1cIiFlbnRyaWVzPy5sZW5ndGhcIj5cbiAgICBQbGVhc2UgdXBkYXRlIHNvbWUgdmFsdWVzXG4gIDwvcD5cbiAgPGRpdlxuICAgICpuZ0lmPVwiZW50cmllcz8ubGVuZ3RoXCJcbiAgICBbaWRdPVwiaWRcIlxuICAgIHN0eWxlPVwid2lkdGg6IDEwMCU7IGhlaWdodDogNDAwcHhcIlxuICA+PC9kaXY+XG48L25nLWNvbnRhaW5lcj5cbiJdfQ==
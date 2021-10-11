import { NgModule } from '@angular/core';
import { NgxFiteloComponent } from './ngx-fitelo.component';
import { ngxFiteloConfig } from './tokens';
import * as i0 from "@angular/core";
export class NgxFiteloModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWZpdGVsby5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZml0ZWxvL3NyYy9saWIvbmd4LWZpdGVsby5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFtQixlQUFlLEVBQUUsTUFBTSxVQUFVLENBQUM7O0FBWTVELE1BQU0sT0FBTyxlQUFlO0lBQzFCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBdUI7UUFDcEMsT0FBTztZQUNMLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFNBQVMsRUFBRSxDQUFFLEVBQUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFDLENBQUM7U0FDM0QsQ0FBQztJQUNKLENBQUM7OzRHQU5VLGVBQWU7NkdBQWYsZUFBZSxpQkFSeEIsa0JBQWtCLGFBS2xCLGtCQUFrQjs2R0FHVCxlQUFlLFlBTmpCLEVBQ1I7MkZBS1UsZUFBZTtrQkFWM0IsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osa0JBQWtCO3FCQUNuQjtvQkFDRCxPQUFPLEVBQUUsRUFDUjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1Asa0JBQWtCO3FCQUNuQjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hGaXRlbG9Db21wb25lbnQgfSBmcm9tICcuL25neC1maXRlbG8uY29tcG9uZW50JztcbmltcG9ydCB7IE5neEZpdGVsb0NvbmZpZywgbmd4Rml0ZWxvQ29uZmlnIH0gZnJvbSAnLi90b2tlbnMnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBOZ3hGaXRlbG9Db21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTmd4Rml0ZWxvQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4Rml0ZWxvTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoY29uZmlnOiBOZ3hGaXRlbG9Db25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE5neEZpdGVsb01vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTmd4Rml0ZWxvTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbIHtwcm92aWRlOiBuZ3hGaXRlbG9Db25maWcsIHVzZVZhbHVlOiBjb25maWd9XVxuICAgIH07XG4gIH1cbn1cbiJdfQ==
import { __awaiter } from "tslib";
import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/fire/firestore";
export class CustomOptionsResource {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLW9wdGlvbnMucmVzb3VyY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZml0ZWxvL3NyYy9saWIvcmVzb3VyY2VzL2ZpcmVzdG9yZS9jdXN0b20tb3B0aW9ucy5yZXNvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBTTNDLE1BQU0sT0FBTyxxQkFBcUI7SUFFaEMsWUFDVSxTQUEyQjtRQUEzQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUNsQyxDQUFDO0lBRUUsc0JBQXNCOztZQUMxQixNQUFNLEVBQUUsR0FBUSxDQUFDLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3ZHLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQztRQUNsQixDQUFDO0tBQUE7SUFFSyx1QkFBdUIsQ0FBQyxpQkFBaUM7O1lBQzdELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUUsaUJBQWlCLEVBQUMsQ0FBQyxDQUFBO1FBQzlGLENBQUM7S0FBQTs7a0hBYlUscUJBQXFCO3NIQUFyQixxQkFBcUIsY0FGcEIsTUFBTTsyRkFFUCxxQkFBcUI7a0JBSGpDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBbmd1bGFyRmlyZXN0b3JlIH0gZnJvbSBcIkBhbmd1bGFyL2ZpcmUvZmlyZXN0b3JlXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21PcHRpb25zUmVzb3VyY2Uge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZmlyZXN0b3JlOiBBbmd1bGFyRmlyZXN0b3JlLFxuICApIHt9XG5cbiAgYXN5bmMgZ2V0QWxsTWVkaWNhbENvbmR0aW9ucygpOiBQcm9taXNlPEN1c3RvbU9wdGlvbltdPiB7XG4gICAgY29uc3QgbWM6IGFueSA9IChhd2FpdCB0aGlzLmZpcmVzdG9yZS5kb2MoJ2N1c3RvbU9wdGlvbnMvbWVkaWNhbENvbmRpdGlvbnMnKS5nZXQoKS50b1Byb21pc2UoKSkuZGF0YSgpO1xuICAgIHJldHVybiBtYy52YWx1ZTtcbiAgfVxuXG4gIGFzeW5jIHNhdmVBbGxNZWRpY2FsQ29uZHRpb25zKG1lZGljYWxDb25kaXRpb25zOiBDdXN0b21PcHRpb25bXSkge1xuICAgIHJldHVybiB0aGlzLmZpcmVzdG9yZS5kb2MoJ2N1c3RvbU9wdGlvbnMvbWVkaWNhbENvbmRpdGlvbnMnKS5zZXQoe3ZhbHVlOiBtZWRpY2FsQ29uZGl0aW9uc30pXG4gIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEN1c3RvbU9wdGlvbiB7XG4gIG5hbWU6IHN0cmluZ1xuICBpc0hpZGRlbjogYm9vbGVhblxufVxuIl19
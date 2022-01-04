import { __awaiter } from "tslib";
import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/fire/firestore";
export class PlansResource {
    constructor(firestore) {
        this.firestore = firestore;
    }
    mget(planIds) {
        return __awaiter(this, void 0, void 0, function* () {
            const planIdsDict = {};
            planIds.forEach(id => planIdsDict[id] = 0);
            const uPlanIds = Object.keys(planIdsDict);
            let dbPlans = [];
            const chunked = chunkArray(uPlanIds, 10);
            for (let i = 0; i < chunked.length; i++) {
                dbPlans = dbPlans.concat((yield this.firestore.collection('plans', q => q.where('id', 'in', chunked[i])).get().toPromise()).docs.map(d => d.data()));
            }
            const plans = [];
            planIds.forEach(planId => {
                plans.push(Object.assign({}, dbPlans.find(p => p.id == planId)));
            });
            return plans;
        });
    }
}
PlansResource.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: PlansResource, deps: [{ token: i1.AngularFirestore }], target: i0.ɵɵFactoryTarget.Injectable });
PlansResource.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: PlansResource, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: PlansResource, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.AngularFirestore }]; } });
function chunkArray(array, size) {
    let result = [];
    for (let i = 0; i < array.length; i += size) {
        let chunk = array.slice(i, i + size);
        result.push(chunk);
    }
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhbnMucmVzb3VyY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZml0ZWxvL3NyYy9saWIvcmVzb3VyY2VzL2ZpcmVzdG9yZS9wbGFucy5yZXNvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBTTNDLE1BQU0sT0FBTyxhQUFhO0lBRXhCLFlBQ1UsU0FBMkI7UUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFDbEMsQ0FBQztJQUVFLElBQUksQ0FBQyxPQUFpQjs7WUFDMUIsTUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDM0MsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUMxQyxJQUFJLE9BQU8sR0FBVyxFQUFFLENBQUM7WUFDekIsTUFBTSxPQUFPLEdBQUcsVUFBVSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUN6QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDdkMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUE7YUFDcko7WUFDRCxNQUFNLEtBQUssR0FBVSxFQUFFLENBQUM7WUFDeEIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDdkIsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkUsQ0FBQyxDQUFDLENBQUM7WUFDSCxPQUFPLEtBQUssQ0FBQztRQUNmLENBQUM7S0FBQTs7MEdBcEJVLGFBQWE7OEdBQWIsYUFBYSxjQUZaLE1BQU07MkZBRVAsYUFBYTtrQkFIekIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7O0FBeUJELFNBQVMsVUFBVSxDQUFDLEtBQUssRUFBRSxJQUFJO0lBQzdCLElBQUksTUFBTSxHQUFVLEVBQUUsQ0FBQTtJQUN0QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksSUFBSSxFQUFFO1FBQ3pDLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQTtRQUNwQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0tBQ3JCO0lBQ0QsT0FBTyxNQUFNLENBQUE7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBbmd1bGFyRmlyZXN0b3JlIH0gZnJvbSBcIkBhbmd1bGFyL2ZpcmUvZmlyZXN0b3JlXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQbGFuc1Jlc291cmNlIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZpcmVzdG9yZTogQW5ndWxhckZpcmVzdG9yZSxcbiAgKSB7fVxuXG4gIGFzeW5jIG1nZXQocGxhbklkczogc3RyaW5nW10pIHtcbiAgICBjb25zdCBwbGFuSWRzRGljdCA9IHt9O1xuICAgIHBsYW5JZHMuZm9yRWFjaChpZCA9PiBwbGFuSWRzRGljdFtpZF0gPSAwKTtcbiAgICBjb25zdCB1UGxhbklkcyA9IE9iamVjdC5rZXlzKHBsYW5JZHNEaWN0KTtcbiAgICBsZXQgZGJQbGFuczogYW55W10gPSAgW107XG4gICAgY29uc3QgY2h1bmtlZCA9IGNodW5rQXJyYXkodVBsYW5JZHMsIDEwKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNodW5rZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRiUGxhbnMgPSBkYlBsYW5zLmNvbmNhdCgoYXdhaXQgdGhpcy5maXJlc3RvcmUuY29sbGVjdGlvbigncGxhbnMnLCBxID0+IHEud2hlcmUoJ2lkJywgJ2luJywgY2h1bmtlZFtpXSkpLmdldCgpLnRvUHJvbWlzZSgpKS5kb2NzLm1hcChkID0+IGQuZGF0YSgpKSlcbiAgICB9XG4gICAgY29uc3QgcGxhbnM6IGFueVtdID0gW107XG4gICAgcGxhbklkcy5mb3JFYWNoKHBsYW5JZCA9PiB7XG4gICAgICBwbGFucy5wdXNoKE9iamVjdC5hc3NpZ24oe30sIGRiUGxhbnMuZmluZChwID0+IHAuaWQgPT0gcGxhbklkKSkpO1xuICAgIH0pO1xuICAgIHJldHVybiBwbGFucztcbiAgfVxuXG59XG5cbmZ1bmN0aW9uIGNodW5rQXJyYXkoYXJyYXksIHNpemUpIHtcbiAgbGV0IHJlc3VsdDogYW55W10gPSBbXVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSArPSBzaXplKSB7XG4gICAgICBsZXQgY2h1bmsgPSBhcnJheS5zbGljZShpLCBpICsgc2l6ZSlcbiAgICAgIHJlc3VsdC5wdXNoKGNodW5rKVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cbiJdfQ==
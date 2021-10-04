import { __awaiter } from "tslib";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class WordpressResource {
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
}
WordpressResource.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: WordpressResource, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
WordpressResource.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: WordpressResource, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.7", ngImport: i0, type: WordpressResource, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29yZHByZXNzLnJlc291cmNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWZpdGVsby9zcmMvbGliL3Jlc291cmNlcy93b3JkcHJlc3Mvd29yZHByZXNzLnJlc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBS3JDLE1BQU0sT0FBTyxpQkFBaUI7SUFFNUIsWUFDVSxVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQzdCLENBQUM7SUFFSixTQUFTO1FBQ1AsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQywwQ0FBMEMsQ0FBQzthQUNuRSxJQUFJLENBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ1QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLGdDQUFnQyxHQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDbEYsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQ0YsQ0FDRixDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFDRCxLQUFLLENBQUMsR0FBRztRQUNQLE1BQU0sTUFBTSxHQUFHLDhEQUE4RCxDQUFDO1FBQzlFLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEMsT0FBTyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLEVBQUUsQ0FBQztZQUN0QyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNWLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDWCxDQUFDO0lBRUQsbUJBQW1CO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsb0RBQW9ELENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMvRixDQUFDO0lBRUQsb0JBQW9CO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsd0RBQXdELENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQTtJQUNsRyxDQUFDO0lBRUssZ0JBQWdCLENBQUMsS0FBSzs7WUFDMUIsTUFBTSxLQUFLLEdBQVcsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxvREFBb0QsS0FBSyxTQUFTLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNoSSxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3RCLE9BQU87b0JBQ0wsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUM7b0JBQ2hDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDO29CQUNsQixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztvQkFDakMsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztvQkFDM0QsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUM7aUJBQ25CLENBQUM7WUFDSixDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUM7S0FBQTtJQUVELGVBQWUsQ0FBQyxJQUFZO1FBQzFCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsc0NBQXNDLEdBQUMsSUFBSSxDQUFDO2FBQ3RFLElBQUksQ0FDSCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDVCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsZ0NBQWdDLEdBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUN4RixPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUNILENBQUMsU0FBUyxFQUFFLENBQUE7SUFDZixDQUFDO0lBRUQsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsa0RBQWtELENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQTtJQUM1RixDQUFDO0lBRUQsT0FBTztRQUNMLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsMENBQTBDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQTtJQUNwRixDQUFDOzs4R0E3RFUsaUJBQWlCO2tIQUFqQixpQkFBaUIsY0FGaEIsTUFBTTsyRkFFUCxpQkFBaUI7a0JBSDdCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBtYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFdvcmRwcmVzc1Jlc291cmNlIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQsXG4gICkge31cblxuICBnZXRIZXJvZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQoYGh0dHBzOi8vZml0ZWxvLmNvL3dwLWpzb24vZml0ZWxvL3YyL2hlcm9gKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcChkYXRhID0+IHtcbiAgICAgICAgICBkYXRhWyd2aWRlb1VybCddID0gXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9cIisgdGhpcy5nZXRJZChkYXRhWyd2aWRlb1VybCddKTtcbiAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfVxuICAgICAgKVxuICAgICkudG9Qcm9taXNlKCk7XG4gIH1cbiAgZ2V0SWQodXJsKSB7XG4gICAgY29uc3QgcmVnRXhwID0gL14uKih5b3V0dS5iZVxcL3x2XFwvfHVcXC9cXHdcXC98ZW1iZWRcXC98d2F0Y2hcXD92PXwmdj0pKFteIyY/XSopLiovO1xuICAgIGNvbnN0IG1hdGNoID0gdXJsLm1hdGNoKHJlZ0V4cCk7XG4gICAgcmV0dXJuIChtYXRjaCAmJiBtYXRjaFsyXS5sZW5ndGggPT09IDExKVxuICAgICAgPyBtYXRjaFsyXVxuICAgICAgOiBudWxsO1xuICB9XG5cbiAgZ2V0QWxsRmVhdHVyZWRCbG9ncygpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldChgaHR0cHM6Ly9maXRlbG8uY28vd3AtanNvbi9maXRlbG8vdjIvZmVhdHVyZWQtYmxvZ3NgKS50b1Byb21pc2UoKTtcbiAgfVxuXG4gIGdldENvbnRlbnRDYXRlZ29yaWVzKCkge1xuICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0KCdodHRwczovL2ZpdGVsby5jby93cC1qc29uL2ZpdGVsby92Mi9jb250ZW50LWNhdGVnb3JpZXMnKS50b1Byb21pc2UoKVxuICB9XG5cbiAgYXN5bmMgZ2V0Q2F0ZWdvcnlCbG9ncyhjYXRJZCkge1xuICAgIGNvbnN0IGJsb2dzID0gPGFueVtdPiBhd2FpdCB0aGlzLmh0dHBDbGllbnQuZ2V0KGBodHRwczovL2ZpdGVsby5jby93cC1qc29uL3dwL3YyL3Bvc3RzP2NhdGVnb3JpZXM9JHtjYXRJZH0mX2VtYmVkYCkudG9Qcm9taXNlKCk7XG4gICAgcmV0dXJuIGJsb2dzLm1hcChibG9nID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlOiBibG9nW1widGl0bGVcIl1bXCJyZW5kZXJlZFwiXSxcbiAgICAgICAgdHlwZTogYmxvZ1tcInR5cGVcIl0sXG4gICAgICAgIGRlc2M6IGJsb2dbXCJleGNlcnB0XCJdW1wicmVuZGVyZWRcIl0sXG4gICAgICAgIGltZzogYmxvZ1tcIl9lbWJlZGRlZFwiXVtcIndwOmZlYXR1cmVkbWVkaWFcIl1bMF1bXCJzb3VyY2VfdXJsXCJdLFxuICAgICAgICBsaW5rOiBibG9nW1wibGlua1wiXVxuICAgICAgfTtcbiAgICB9KVxuICB9XG5cbiAgZ2V0VmlkZW9BbmRCbG9nKHR5cGU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0KCdodHRwczovL2ZpdGVsby5jby93cC1qc29uL2ZpdGVsby92Mi8nK3R5cGUpXG4gICAgLnBpcGUoXG4gICAgICBtYXAoZGF0YSA9PiB7XG4gICAgICAgIGRhdGFbMF1bJ3ZpZGVvVXJsJ10gPSBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1wiKyB0aGlzLmdldElkKGRhdGFbMF1bJ3ZpZGVvVXJsJ10pO1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pXG4gICAgKS50b1Byb21pc2UoKVxuICB9XG5cbiAgZ2V0SW5zcGlyZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQoYGh0dHBzOi8vZml0ZWxvLmNvL3dwLWpzb24vZml0ZWxvL3YyL2dldC1pbnNwaXJlZGApLnRvUHJvbWlzZSgpXG4gIH1cblxuICBnZXRGQVFzKCkge1xuICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0KGBodHRwczovL2ZpdGVsby5jby93cC1qc29uL2ZpdGVsby92Mi9mYXFzYCkudG9Qcm9taXNlKClcbiAgfVxuXG59XG4iXX0=
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
    getHealthyRecipes() {
        return this.httpClient.get(`https://fitelo.co/wp-json/fitelo/v2/healthy-recipes`).toPromise();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29yZHByZXNzLnJlc291cmNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWZpdGVsby9zcmMvbGliL3Jlc291cmNlcy93b3JkcHJlc3Mvd29yZHByZXNzLnJlc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBS3JDLE1BQU0sT0FBTyxpQkFBaUI7SUFFNUIsWUFDVSxVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQzdCLENBQUM7SUFFSixTQUFTO1FBQ1AsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQywwQ0FBMEMsQ0FBQzthQUNuRSxJQUFJLENBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ1QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLGdDQUFnQyxHQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDbEYsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQ0YsQ0FDRixDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFDRCxLQUFLLENBQUMsR0FBRztRQUNQLE1BQU0sTUFBTSxHQUFHLDhEQUE4RCxDQUFDO1FBQzlFLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEMsT0FBTyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLEVBQUUsQ0FBQztZQUN0QyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNWLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDWCxDQUFDO0lBRUQsbUJBQW1CO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsb0RBQW9ELENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMvRixDQUFDO0lBRUQsb0JBQW9CO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsd0RBQXdELENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQTtJQUNsRyxDQUFDO0lBRUssZ0JBQWdCLENBQUMsS0FBSzs7WUFDMUIsTUFBTSxLQUFLLEdBQVcsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxvREFBb0QsS0FBSyxTQUFTLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNoSSxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3RCLE9BQU87b0JBQ0wsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUM7b0JBQ2hDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDO29CQUNsQixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztvQkFDakMsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztvQkFDM0QsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUM7aUJBQ25CLENBQUM7WUFDSixDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUM7S0FBQTtJQUVELGVBQWUsQ0FBQyxJQUFZO1FBQzFCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsc0NBQXNDLEdBQUMsSUFBSSxDQUFDO2FBQ3RFLElBQUksQ0FDSCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDVCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsZ0NBQWdDLEdBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUN4RixPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUNILENBQUMsU0FBUyxFQUFFLENBQUE7SUFDZixDQUFDO0lBRUQsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsa0RBQWtELENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQTtJQUM1RixDQUFDO0lBRUQsT0FBTztRQUNMLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsMENBQTBDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQTtJQUNwRixDQUFDO0lBRUQsaUJBQWlCO1FBQ2YsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxxREFBcUQsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFBO0lBQy9GLENBQUM7OzhHQWpFVSxpQkFBaUI7a0hBQWpCLGlCQUFpQixjQUZoQixNQUFNOzJGQUVQLGlCQUFpQjtrQkFIN0IsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgV29yZHByZXNzUmVzb3VyY2Uge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cENsaWVudDogSHR0cENsaWVudCxcbiAgKSB7fVxuXG4gIGdldEhlcm9lcygpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldChgaHR0cHM6Ly9maXRlbG8uY28vd3AtanNvbi9maXRlbG8vdjIvaGVyb2ApXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKGRhdGEgPT4ge1xuICAgICAgICAgIGRhdGFbJ3ZpZGVvVXJsJ10gPSBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1wiKyB0aGlzLmdldElkKGRhdGFbJ3ZpZGVvVXJsJ10pO1xuICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9XG4gICAgICApXG4gICAgKS50b1Byb21pc2UoKTtcbiAgfVxuICBnZXRJZCh1cmwpIHtcbiAgICBjb25zdCByZWdFeHAgPSAvXi4qKHlvdXR1LmJlXFwvfHZcXC98dVxcL1xcd1xcL3xlbWJlZFxcL3x3YXRjaFxcP3Y9fCZ2PSkoW14jJj9dKikuKi87XG4gICAgY29uc3QgbWF0Y2ggPSB1cmwubWF0Y2gocmVnRXhwKTtcbiAgICByZXR1cm4gKG1hdGNoICYmIG1hdGNoWzJdLmxlbmd0aCA9PT0gMTEpXG4gICAgICA/IG1hdGNoWzJdXG4gICAgICA6IG51bGw7XG4gIH1cblxuICBnZXRBbGxGZWF0dXJlZEJsb2dzKCkge1xuICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0KGBodHRwczovL2ZpdGVsby5jby93cC1qc29uL2ZpdGVsby92Mi9mZWF0dXJlZC1ibG9nc2ApLnRvUHJvbWlzZSgpO1xuICB9XG5cbiAgZ2V0Q29udGVudENhdGVnb3JpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQoJ2h0dHBzOi8vZml0ZWxvLmNvL3dwLWpzb24vZml0ZWxvL3YyL2NvbnRlbnQtY2F0ZWdvcmllcycpLnRvUHJvbWlzZSgpXG4gIH1cblxuICBhc3luYyBnZXRDYXRlZ29yeUJsb2dzKGNhdElkKSB7XG4gICAgY29uc3QgYmxvZ3MgPSA8YW55W10+IGF3YWl0IHRoaXMuaHR0cENsaWVudC5nZXQoYGh0dHBzOi8vZml0ZWxvLmNvL3dwLWpzb24vd3AvdjIvcG9zdHM/Y2F0ZWdvcmllcz0ke2NhdElkfSZfZW1iZWRgKS50b1Byb21pc2UoKTtcbiAgICByZXR1cm4gYmxvZ3MubWFwKGJsb2cgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGU6IGJsb2dbXCJ0aXRsZVwiXVtcInJlbmRlcmVkXCJdLFxuICAgICAgICB0eXBlOiBibG9nW1widHlwZVwiXSxcbiAgICAgICAgZGVzYzogYmxvZ1tcImV4Y2VycHRcIl1bXCJyZW5kZXJlZFwiXSxcbiAgICAgICAgaW1nOiBibG9nW1wiX2VtYmVkZGVkXCJdW1wid3A6ZmVhdHVyZWRtZWRpYVwiXVswXVtcInNvdXJjZV91cmxcIl0sXG4gICAgICAgIGxpbms6IGJsb2dbXCJsaW5rXCJdXG4gICAgICB9O1xuICAgIH0pXG4gIH1cblxuICBnZXRWaWRlb0FuZEJsb2codHlwZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQoJ2h0dHBzOi8vZml0ZWxvLmNvL3dwLWpzb24vZml0ZWxvL3YyLycrdHlwZSlcbiAgICAucGlwZShcbiAgICAgIG1hcChkYXRhID0+IHtcbiAgICAgICAgZGF0YVswXVsndmlkZW9VcmwnXSA9IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvXCIrIHRoaXMuZ2V0SWQoZGF0YVswXVsndmlkZW9VcmwnXSk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSlcbiAgICApLnRvUHJvbWlzZSgpXG4gIH1cblxuICBnZXRJbnNwaXJlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldChgaHR0cHM6Ly9maXRlbG8uY28vd3AtanNvbi9maXRlbG8vdjIvZ2V0LWluc3BpcmVkYCkudG9Qcm9taXNlKClcbiAgfVxuXG4gIGdldEZBUXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQoYGh0dHBzOi8vZml0ZWxvLmNvL3dwLWpzb24vZml0ZWxvL3YyL2ZhcXNgKS50b1Byb21pc2UoKVxuICB9XG5cbiAgZ2V0SGVhbHRoeVJlY2lwZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQoYGh0dHBzOi8vZml0ZWxvLmNvL3dwLWpzb24vZml0ZWxvL3YyL2hlYWx0aHktcmVjaXBlc2ApLnRvUHJvbWlzZSgpXG4gIH1cblxufVxuIl19
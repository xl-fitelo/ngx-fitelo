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
        return this.httpClient.get(`https://fitelo.co/wp-json/wp/v2/posts?categories=${catId}&_embed`).toPromise();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29yZHByZXNzLnJlc291cmNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWZpdGVsby9zcmMvbGliL3Jlc291cmNlcy93b3JkcHJlc3Mvd29yZHByZXNzLnJlc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFLckMsTUFBTSxPQUFPLGlCQUFpQjtJQUU1QixZQUNVLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7SUFDN0IsQ0FBQztJQUVKLFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLDBDQUEwQyxDQUFDO2FBQ25FLElBQUksQ0FDSCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDVCxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsZ0NBQWdDLEdBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNsRixPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsQ0FDRixDQUNGLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUNELEtBQUssQ0FBQyxHQUFHO1FBQ1AsTUFBTSxNQUFNLEdBQUcsOERBQThELENBQUM7UUFDOUUsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoQyxPQUFPLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssRUFBRSxDQUFDO1lBQ3RDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1YsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNYLENBQUM7SUFFRCxtQkFBbUI7UUFDakIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxvREFBb0QsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQy9GLENBQUM7SUFFRCxvQkFBb0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyx3REFBd0QsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFBO0lBQ2xHLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxLQUFLO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsb0RBQW9ELEtBQUssU0FBUyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDN0csQ0FBQztJQUVELGVBQWUsQ0FBQyxJQUFZO1FBQzFCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsc0NBQXNDLEdBQUMsSUFBSSxDQUFDO2FBQ3RFLElBQUksQ0FDSCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDVCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsZ0NBQWdDLEdBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUN4RixPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUNILENBQUMsU0FBUyxFQUFFLENBQUE7SUFDZixDQUFDO0lBRUQsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsa0RBQWtELENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQTtJQUM1RixDQUFDO0lBRUQsT0FBTztRQUNMLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsMENBQTBDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQTtJQUNwRixDQUFDO0lBRUQsaUJBQWlCO1FBQ2YsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxxREFBcUQsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFBO0lBQy9GLENBQUM7OzhHQXhEVSxpQkFBaUI7a0hBQWpCLGlCQUFpQixjQUZoQixNQUFNOzJGQUVQLGlCQUFpQjtrQkFIN0IsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IG1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgV29yZHByZXNzUmVzb3VyY2Uge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cENsaWVudDogSHR0cENsaWVudCxcbiAgKSB7fVxuXG4gIGdldEhlcm9lcygpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldChgaHR0cHM6Ly9maXRlbG8uY28vd3AtanNvbi9maXRlbG8vdjIvaGVyb2ApXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKGRhdGEgPT4ge1xuICAgICAgICAgIGRhdGFbJ3ZpZGVvVXJsJ10gPSBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1wiKyB0aGlzLmdldElkKGRhdGFbJ3ZpZGVvVXJsJ10pO1xuICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9XG4gICAgICApXG4gICAgKS50b1Byb21pc2UoKTtcbiAgfVxuICBnZXRJZCh1cmwpIHtcbiAgICBjb25zdCByZWdFeHAgPSAvXi4qKHlvdXR1LmJlXFwvfHZcXC98dVxcL1xcd1xcL3xlbWJlZFxcL3x3YXRjaFxcP3Y9fCZ2PSkoW14jJj9dKikuKi87XG4gICAgY29uc3QgbWF0Y2ggPSB1cmwubWF0Y2gocmVnRXhwKTtcbiAgICByZXR1cm4gKG1hdGNoICYmIG1hdGNoWzJdLmxlbmd0aCA9PT0gMTEpXG4gICAgICA/IG1hdGNoWzJdXG4gICAgICA6IG51bGw7XG4gIH1cblxuICBnZXRBbGxGZWF0dXJlZEJsb2dzKCkge1xuICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0KGBodHRwczovL2ZpdGVsby5jby93cC1qc29uL2ZpdGVsby92Mi9mZWF0dXJlZC1ibG9nc2ApLnRvUHJvbWlzZSgpO1xuICB9XG5cbiAgZ2V0Q29udGVudENhdGVnb3JpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQoJ2h0dHBzOi8vZml0ZWxvLmNvL3dwLWpzb24vZml0ZWxvL3YyL2NvbnRlbnQtY2F0ZWdvcmllcycpLnRvUHJvbWlzZSgpXG4gIH1cblxuICBnZXRDYXRlZ29yeUJsb2dzKGNhdElkKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQoYGh0dHBzOi8vZml0ZWxvLmNvL3dwLWpzb24vd3AvdjIvcG9zdHM/Y2F0ZWdvcmllcz0ke2NhdElkfSZfZW1iZWRgKS50b1Byb21pc2UoKTtcbiAgfVxuXG4gIGdldFZpZGVvQW5kQmxvZyh0eXBlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldCgnaHR0cHM6Ly9maXRlbG8uY28vd3AtanNvbi9maXRlbG8vdjIvJyt0eXBlKVxuICAgIC5waXBlKFxuICAgICAgbWFwKGRhdGEgPT4ge1xuICAgICAgICBkYXRhWzBdWyd2aWRlb1VybCddID0gXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9cIisgdGhpcy5nZXRJZChkYXRhWzBdWyd2aWRlb1VybCddKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9KVxuICAgICkudG9Qcm9taXNlKClcbiAgfVxuXG4gIGdldEluc3BpcmVkKCkge1xuICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0KGBodHRwczovL2ZpdGVsby5jby93cC1qc29uL2ZpdGVsby92Mi9nZXQtaW5zcGlyZWRgKS50b1Byb21pc2UoKVxuICB9XG5cbiAgZ2V0RkFRcygpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldChgaHR0cHM6Ly9maXRlbG8uY28vd3AtanNvbi9maXRlbG8vdjIvZmFxc2ApLnRvUHJvbWlzZSgpXG4gIH1cblxuICBnZXRIZWFsdGh5UmVjaXBlcygpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldChgaHR0cHM6Ly9maXRlbG8uY28vd3AtanNvbi9maXRlbG8vdjIvaGVhbHRoeS1yZWNpcGVzYCkudG9Qcm9taXNlKClcbiAgfVxuXG59XG4iXX0=
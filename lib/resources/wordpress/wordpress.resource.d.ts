import { HttpClient } from "@angular/common/http";
import * as i0 from "@angular/core";
export declare class WordpressResource {
    private httpClient;
    constructor(httpClient: HttpClient);
    getHeroes(): Promise<Object>;
    getId(url: any): any;
    getAllFeaturedBlogs(): Promise<Object>;
    getContentCategories(): Promise<Object>;
    getCategoryBlogs(catId: any): Promise<{
        title: any;
        type: any;
        desc: any;
        img: any;
        link: any;
    }[]>;
    getVideoAndBlog(type: string): Promise<Object>;
    getInspired(): Promise<Object>;
    getFAQs(): Promise<Object>;
    static ɵfac: i0.ɵɵFactoryDeclaration<WordpressResource, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<WordpressResource>;
}

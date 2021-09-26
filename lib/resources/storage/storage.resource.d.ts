import { AngularFireStorage } from "@angular/fire/storage";
import * as i0 from "@angular/core";
export declare class StorageResource {
    private afStorage;
    constructor(afStorage: AngularFireStorage);
    uploadUserProfilePic(uid: string, imageFile: any): Promise<string>;
    fetchUserProfilePicUrl(uid: string): Promise<string>;
    uploadUserFile(uid: string, type: 'reports' | 'pictures', file: any): import("@angular/fire/storage").AngularFireUploadTask;
    fetchUserFiles(uid: string, type: 'reports' | 'pictures'): Promise<FileData[]>;
    private fetchAdditionalData;
    static ɵfac: i0.ɵɵFactoryDeclaration<StorageResource, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StorageResource>;
}
export interface FileData {
    Reference: any;
    name: string;
    date: string;
    mimeType: string;
    url: string;
}

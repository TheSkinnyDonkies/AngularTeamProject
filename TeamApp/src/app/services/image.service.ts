import { GalleryImage } from './../models/galleryImage.model';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseApp } from 'angularfire2';
import 'firebase/storage';
import * as firebase from 'firebase/app';

@Injectable()
export class ImageService {
    private uid: string;

    constructor(private afAuth: AngularFireAuth, private afDB: AngularFireDatabase) {
        afAuth.authState.subscribe(auth => {
            if (auth !== undefined && auth !== null) {
                this.uid = auth.uid;
            }
        });
    }
    getImages(): Observable<GalleryImage[]> {
        return this.afDB.list('uploads');
    }
}

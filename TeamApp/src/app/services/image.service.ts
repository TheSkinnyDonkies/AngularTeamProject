import { GalleryImage } from './../models/galleryImage.model';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseApp } from 'angularfire2';
import 'firebase/storage';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable()
export class ImageService {

    constructor() { }

}
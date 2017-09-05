import { User } from './../models/user.model';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';


@Injectable()
export class AuthService {
    public user: Observable<firebase.User>;

    constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase, private router: Router) {
        this.user = afAuth.authState;
    }

    //// Social Auth ////
    googleLogin() { // TODO: maybe const provider should be injected from outside!
        return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    facebookLogin() {
        return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
    }

    //// Email/Password Auth ////

    emailSignUp(user: User) {
        return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    }

    emailLogin(user: User) {
        return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    }

    authUser() {
        return this.user;
    }

    //// Sign Out ////

    signOut(): void {
        this.afAuth.auth.signOut()
            .then(resolve => this.router.navigate(['/']));
    }
}

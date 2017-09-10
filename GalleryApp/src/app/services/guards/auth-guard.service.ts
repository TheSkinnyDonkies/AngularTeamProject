import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    user: Observable<firebase.User>;

    constructor(private afAuth: AngularFireAuth, private router: Router) {
        this.user = afAuth.authState;
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.user.map((auth) => {
            if (!auth) {
                this.router.navigateByUrl('/must-login');
                return false;
            }
            return true;
        }).take(1);
    }
}

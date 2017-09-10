import { RouterModule } from '@angular/router';
/* tslint:disable:no-unused-variable */
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { FirebaseApp, AngularFireModule } from 'angularfire2';
import * as firebase from 'firebase/app';

describe('Service: Auth', () => {
  beforeEach(async(() => {
    const firebaseConfig = {
      apiKey: 'AIzaSyC_wGRiPZ3FmR3gurWmYyC93SB_-4d4pbQ',
      authDomain: 'team-app-2e616.firebaseapp.com',
      databaseURL: 'https://team-app-2e616.firebaseio.com',
      projectId: 'team-app-2e616',
      storageBucket: 'team-app-2e616.appspot.com',
      messagingSenderId: '15274871986',
    };

    TestBed.configureTestingModule({
      imports: [
        RouterModule,
        AngularFireModule.initializeApp(firebaseConfig),
      ],
      providers: [AuthService, AngularFireAuth],
    }).compileComponents();
  }));

  it('should ...', inject([AuthService, AngularFireAuth, AngularFireDatabase], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});

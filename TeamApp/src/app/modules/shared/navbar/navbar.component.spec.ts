import { CoreModule } from './../../../core/core.module';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './../../../services/auth.service';
import { AngularFireModule } from 'angularfire2';
import { Router } from '@angular/router';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

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
      declarations: [NavbarComponent],
      imports: [
        RouterTestingModule,
        CoreModule,
        AngularFireModule.initializeApp(firebaseConfig),
      ],
      providers: [AngularFireAuth, AngularFireDatabase],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should returnUserNameOutofAEmail method get correct user name from email', () => {
    // Arrange
    const email = 'pesho@abv.bg';
    // Act & Assert
    expect(component.returnUserNameOutofAEmail(email)).toContain('pesho');
  });
});

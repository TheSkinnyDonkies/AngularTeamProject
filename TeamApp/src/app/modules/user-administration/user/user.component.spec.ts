import { User } from './../../../models/user.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { CoreExternalDependenciesModule } from './../../../core/core-external-dependencies.module';
import { UserAdministrationModule } from './../user-administration.module';
import { CoreModule } from './../../../core/core.module';
import { RouterTestingModule } from '@angular/router/testing';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        RouterTestingModule,
        CoreModule,
        UserAdministrationModule,
        CoreExternalDependenciesModule
      ],
      providers: [AngularFireAuth, AngularFireDatabase],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created successfully', () => {
    expect(component).toBeTruthy();
  });

  it('should returnUserNameOutofAEmail method get correct user name from email', () => {
    // Arrange
    const user = new User();
    user.email = 'pesho@abv.bg';
    // Act & Assert
    expect(component.returnUserNameOutofAUserObj(user)).toContain('pesho');
  });

  it('should returnUserNameOutofAEmail method throw error email is invalid', () => {
    // Arrange
    const invalidUser = null;
    // Act & Assert
    expect(error => component.returnUserNameOutofAUserObj(invalidUser)).toThrowError('User is invalid!');
  });
});

import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { AlertModule } from 'ngx-bootstrap';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../../environments/environment';


@NgModule({
  imports: [
    AlertModule.forRoot(),
    MaterializeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ]
})
export class CoreExternalDependenciesModule { }

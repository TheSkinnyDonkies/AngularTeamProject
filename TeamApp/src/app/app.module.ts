import { GalleryModule } from './modules/gallery/gallery.module';
import { environment } from './../environments/environment';
import { UserAdministrationModule } from './modules/user-administration/user-administration.module';
import { HomeModule } from './modules/home/home.module';
import { SharedModule } from './modules/shared/shared.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MaterializeModule } from 'angular2-materialize';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase), // TODO: should be in core module?!?
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    AppRoutingModule,
    CoreModule,
    AlertModule.forRoot(), // TODO: should be abstracted in core.module with all the materialize and bootstrap and so on?!?!
    SharedModule,
    HomeModule,
    GalleryModule,
    UserAdministrationModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

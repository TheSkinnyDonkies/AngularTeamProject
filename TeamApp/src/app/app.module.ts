import { UserAdministrationModule } from './modules/user-administration/user-administration.module';
import { HomeModule } from './modules/home/home.module';
import { SharedModule } from './modules/shared/shared.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AlertModule.forRoot(),
    SharedModule,
    HomeModule,
    UserAdministrationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { UserComponent } from './modules/user-administration/user/user.component';
import { ImageDetailComponent } from './modules/gallery/image-detail/image-detail.component';
import { UploadComponent } from './modules/gallery/upload/upload.component';
import { GalleryComponent } from './modules/gallery/gallery/gallery.component';
import { EmailLoginComponent } from './modules/user-administration/login/email-login/email-login.component';
import { AuthGuard } from './services/guards/auth-guard.service';
import { SignupComponent } from './modules/user-administration/signup/signup.component';
import { LoginComponent } from './modules/user-administration/login/login.component';
import { NotFoundComponent } from './modules/shared/not-found/not-found.component';
import { HomeComponent } from './modules/home/home/home.component';
import { NavbarComponent } from './modules/shared/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/home/home.module#HomeModule'
  },
  {
    path: '',
    loadChildren: './modules/user-administration/user-administration.module#UserAdministrationModule'
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'image/:id',
    component: ImageDetailComponent
  },
  {
    path: 'upload',
    component: UploadComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

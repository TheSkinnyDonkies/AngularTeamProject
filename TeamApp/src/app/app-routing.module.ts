import { NotFoundComponent } from './modules/shared/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/home/home.module#HomeModule'
  },
  {
    path: 'user',
    loadChildren: './modules/user-administration/user-administration.module#UserAdministrationModule'
  },
  {
    path: 'gallery',
    loadChildren: './modules/gallery/gallery.module#GalleryModule'
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


import { ImageService } from './../../services/image.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { UploadComponent } from './upload/upload.component';
import { UploadService } from '../../services/upload.service';

@NgModule({
  imports: [
    CommonModule,
    GalleryRoutingModule
  ],
  declarations: [
    GalleryComponent,
    ImageDetailComponent,
    UploadComponent
],
  exports: [
    GalleryComponent,
    ImageDetailComponent,
    UploadComponent
  ],
  providers: [
    ImageService,
    UploadService
  ]
})
export class GalleryModule { }

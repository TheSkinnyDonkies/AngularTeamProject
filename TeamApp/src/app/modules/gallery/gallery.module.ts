import { UploadService } from './../../services/upload.service';
import { ImageService } from './../../services/image.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';

@NgModule({
  imports: [
    CommonModule,
    GalleryRoutingModule
  ],
  declarations: [
    GalleryComponent,
    ImageDetailComponent
  ],
  exports: [
    GalleryComponent,
    ImageDetailComponent
  ],
  providers: [
    ImageService,
    UploadService
  ]
})
export class GalleryModule { }

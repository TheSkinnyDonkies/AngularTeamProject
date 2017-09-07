import { AuthService } from './../../../services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Upload } from './../../../models/upload.model';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { UploadService } from './../../../services/upload.service';
import * as _ from 'lodash';
import { ToastsManager } from 'ng2-toastr/src/toast-manager';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  files: FileList;
  upload: Upload;
  isSendingFilesEnabled: boolean;
  constructor(private uploadService: UploadService, private authService: AuthService,
    public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  uploadFiles() {
    const filesToUpload = this.files;
    const filesIndexs = _.range(filesToUpload.length);
    _.each(filesIndexs, (index) => {
      console.log(filesToUpload[index]);
      this.upload = new Upload(filesToUpload[index], this.authService);
      this.uploadService.uploadFile(this.upload);
      this.isSendingFilesEnabled = !this.isSendingFilesEnabled;
      this.toastr.success('Image Uploaded!', 'Success!');
    });
  }
  handleFiles(event) {
    this.files = event.target.files;
    this.isSendingFilesEnabled = !this.isSendingFilesEnabled;
  }
  ngOnInit() {
  }
}

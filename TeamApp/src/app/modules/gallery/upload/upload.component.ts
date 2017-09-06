import { AngularFireAuth } from 'angularfire2/auth';
import { Upload } from './../../../models/upload.model';
import { Component, OnInit } from '@angular/core';
import { UploadService } from './../../../services/upload.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  files: FileList;
  upload: Upload;
  isSendingFilesEnabled: boolean;
  constructor(private uploadService: UploadService, private afAuth: AngularFireAuth) { }

  uploadFiles() {
    const filesToUpload = this.files;
    const filesIndexs = _.range(filesToUpload.length);
    _.each(filesIndexs, (index) => {
      console.log(filesToUpload[index]);
      this.upload = new Upload(filesToUpload[index], this.afAuth);
      this.uploadService.uploadFile(this.upload);
      this.isSendingFilesEnabled = !this.isSendingFilesEnabled;
    });
  }
  handleFiles(event) {
    this.files = event.target.files;
    this.isSendingFilesEnabled = !this.isSendingFilesEnabled;
  }
  ngOnInit() {
  }
}

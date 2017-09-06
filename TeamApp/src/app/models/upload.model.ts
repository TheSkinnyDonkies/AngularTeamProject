import { AngularFireAuth } from 'angularfire2/auth';
import { User } from './user.model';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

export class Upload {
    $key: string;
    name: string;
    file: File;
    url: string;
    progress: number;
    uploadedOn: any;
    uploadedBy: any;

    constructor(private currentFile: File, afAuth: AngularFireAuth) {
        this.file = currentFile;
        afAuth.authState.subscribe(auth => {
            if (auth !== undefined && auth !== null) {
                this.uploadedBy = auth.email;
            }
        });
        this.uploadedOn = (new Date()).toString();
    }
}

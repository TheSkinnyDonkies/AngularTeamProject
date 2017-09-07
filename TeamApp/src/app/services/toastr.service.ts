import { ToastsManager } from 'ng2-toastr/src/toast-manager';
import { Injectable, ViewContainerRef, Host } from '@angular/core';

@Injectable()
export class ToastrService {

    private vcr: ViewContainerRef;
    constructor(public toastr: ToastsManager) {
    }
    initToasterService(viewContainerRef: ViewContainerRef) {
        this.vcr = viewContainerRef;
        this.toastr.setRootViewContainerRef(this.vcr);
    }
    getSuccessMessage(message: string) {
        this.toastr.success(message);
    }
    getWarningMessage(message: string) {
        this.toastr.warning(message);
    }
}

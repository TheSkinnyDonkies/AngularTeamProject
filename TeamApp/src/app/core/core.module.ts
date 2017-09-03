import { AuthGuard } from './../services/guards/auth-guard.service';
import { AuthService } from './../services/auth.service';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  providers: [AuthService, AuthGuard]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parent: CoreModule) {
      if (parent) {
        throw new Error('Core module has already been provided elswhere!');
      }
  }
}


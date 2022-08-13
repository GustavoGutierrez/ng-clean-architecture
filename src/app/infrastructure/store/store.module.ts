import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { environment } from '@environments/environment';
import { NgxsStoragePluginModule, StorageOption } from '@ngxs/storage-plugin';
import { HttpClientModule } from '@angular/common/http';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

// States of application
// import { AuthState } from '@state/auth/auth.state';
import { UserState } from '@state/user/user.state';

@NgModule({
  imports: [
    CommonModule,
    NgxsModule.forRoot([UserState], {
      developmentMode: !environment.production,
    }),
    NgxsStoragePluginModule.forRoot({
      key: [`${environment.projectName}User`],
      storage: StorageOption.SessionStorage
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    HttpClientModule
  ]
})
export class StoreModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@core/core.module';
import { InfrastructureModule } from '@infrastructure/infrastructure.module';
import { UserModule } from './user/user.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    InfrastructureModule,
    UserModule
  ],
  declarations: [

  ],
  exports: [

  ],
  providers: [
  ]
})
export class PresentationModule { }

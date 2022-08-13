import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@core/core.module';
import { UserCardListComponent } from './index';
import { InfrastructureModule } from '@infrastructure/infrastructure.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    InfrastructureModule
  ],
  declarations: [
    UserCardListComponent
  ],
  exports: [
    UserCardListComponent
  ],
  providers: [
  ]
})
export class PresentationModule { }

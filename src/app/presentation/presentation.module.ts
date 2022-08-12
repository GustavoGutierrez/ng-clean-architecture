import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { DataModule } from '../data/data.module';
import { UserCardListComponent } from './user-card-list/user-card-list.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    DataModule
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

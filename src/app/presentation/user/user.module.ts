import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserCardListComponent } from './user-card-list/user-card-list.component';
import { UserRoutingModule } from './user-routing.module';


@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports: [
    UserCardListComponent
  ],
  declarations: [
    UserCardListComponent
  ],
  providers: [],
})
export class UserModule { }

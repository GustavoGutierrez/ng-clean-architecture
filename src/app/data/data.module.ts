import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserWebRepository } from './repository/user-web-repository';
import { UserRepository } from '@core/repositories';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [

  ],
  providers: [
    {provide: UserRepository, useClass: UserWebRepository}
    // {provide: UserRepository, useClass: UserMockRepository}
  ]
})
export class DataModule { }

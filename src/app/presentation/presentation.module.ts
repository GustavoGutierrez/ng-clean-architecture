import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModule } from './user/user.module';
import { RouterModule } from '@angular/router';
import { PublicLayoutComponent, ShellLayoutComponent } from './layout';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    UserModule
  ],
  exports: [
    ShellLayoutComponent,
    PublicLayoutComponent
  ],
  declarations: [
    ShellLayoutComponent,
    PublicLayoutComponent
  ],
})
export class PresentationModule { }

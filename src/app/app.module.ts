import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { DataModule } from '@data/data.module';
import { StoreModule } from 'src/app/store/store.module';
import { PresentationModule } from '@presentation/presentation.module';
import { RouterModule } from '@angular/router';
import { ShellLayoutComponent } from '@presentation/layout/shell-layout/shell-layout.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    CoreModule,
    StoreModule,
    DataModule,
    PresentationModule
  ],
  bootstrap: [ShellLayoutComponent]
})
export class AppModule { }

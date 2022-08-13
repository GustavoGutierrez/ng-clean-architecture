import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DataModule } from '@data/data.module';
import { CoreModule } from '@core/core.module';
import { UserRepository } from '@core/repositories/user.repository';
import { PresentationModule } from '@presentation/presentation.module';
import { UserMockRepository } from '@repository/user-mock-repository/user-mock.repository';
import { UserWebRepository } from '@repository/user-web-repository/user-web.repository';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DataModule,
    CoreModule,
    PresentationModule
  ],
  providers: [
    // {provide: UserRepository, useClass: UserWebRepository}
    {provide: UserRepository, useClass: UserMockRepository}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

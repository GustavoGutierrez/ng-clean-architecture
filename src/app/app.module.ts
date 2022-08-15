import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from '@core/core.module';
import { InfrastructureModule } from '@infrastructure/infrastructure.module';
import { StoreModule } from 'src/app/store/store.module';
import { PresentationModule } from '@presentation/presentation.module';
import { UserRepository } from '@core/repositories/user.repository';
import { UserMockRepository } from '@repository/user-mock-repository';
import { UserWebRepository } from '@repository/user-web-repository';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CoreModule,
    StoreModule,
    InfrastructureModule,
    PresentationModule
  ],
  providers: [
    {provide: UserRepository, useClass: UserWebRepository}
    // {provide: UserRepository, useClass: UserMockRepository}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UserRepository } from '@core/repositories/user.repository';
import { UserMockRepository } from '@repository/user-mock-repository';
import { UserCardListComponent } from '@presentation/user-card-list/user-card-list.component';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        UserCardListComponent
      ],
      providers: [
        {provide: UserRepository, useClass: UserMockRepository}
      ]
    }).compileComponents();
  });
  it('should create the app', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});

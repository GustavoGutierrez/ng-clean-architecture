import { inject, TestBed } from '@angular/core/testing';
import { UserRepository } from '@core/repositories/user.repository';
import { UserMockRepository } from '@data/repository/user-mock-repository';
import { StoreModule } from '@state/store.module';

// import { count } from 'rxjs';
import { GetAllUsersUsecase } from './get-all-users.usecase';

describe('GetAllUsersUsecase', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule
      ],
      providers: [
        {provide: UserRepository, useClass: UserMockRepository},
        GetAllUsersUsecase
      ]
    });
  });

  it('should be created', inject([GetAllUsersUsecase], (service: GetAllUsersUsecase) => {
    expect(service).toBeTruthy();
  }));

  it('get all users by user case', inject([GetAllUsersUsecase], (service: GetAllUsersUsecase) => {
    service.execute()
    .subscribe(users => {
      expect(users.length).toBe(3);
    }).unsubscribe();

  }));


});

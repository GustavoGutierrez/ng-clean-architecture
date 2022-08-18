import { HttpClientModule } from '@angular/common/http';
import { inject, TestBed } from '@angular/core/testing';
import { UserModel } from '@core/domain';
import { UserRepository } from '@core/repositories';

import { UserWebEntity, UserWebRepository } from '@data/repository/user-web-repository';
import { count, pipe, toArray } from 'rxjs';

describe('UserWebRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        UserWebRepository
      ],
    });
  });

  it('should be created', inject([UserWebRepository], (service: UserWebRepository) => {
    expect(service).toBeTruthy();
  }));

  // it('must obtain all users', inject([UserWebRepository], (service: UserWebRepository) => {
  //   service.getAllUsers()
  //   .pipe(
  //     toArray<UserModel>()
  //   )
  //   .subscribe((users: UserModel[]) => {
  //       expect(users.length).toBeGreaterThan(3);
  //   }).unsubscribe();
  // }));

  // it('must obtain the user', inject([UserWebRepository], (service: UserWebRepository) => {
  //   const response: UserWebEntity = {
  //     "createdAt": "2022-08-09T20:51:19.571Z",
  //     "name": "Rene Kautzer",
  //     "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/151.jpg",
  //     "password": "e72rglc0_gJUcsn",
  //     "email": "Ansel53@gmail.com",
  //     "id": "2"
  //   };

  //   service.getUserById('2').subscribe((user: UserWebEntity) => {
  //     expect(user.email).toEqual(response.email);
  //     expect(user.name).toEqual(response.name);
  //   }).unsubscribe();

  // }));

});

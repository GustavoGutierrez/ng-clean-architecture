import { inject, TestBed } from '@angular/core/testing';

import { UserMockEntity, UserMockRepository } from '@data/repository/user-mock-repository';
import { toArray } from 'rxjs';

describe('UserRepositoryMockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserMockRepository]
    });
  });

  it('should be created', inject([UserMockRepository], (service: UserMockRepository) => {
    expect(service).toBeTruthy();
  }));

  it('must obtain all users', inject([UserMockRepository], (service: UserMockRepository) => {
    service.getAllUsers()
    .pipe(
      toArray()
    )
    .subscribe((users: UserMockEntity[]) => {
      expect(users.length).toBe(3);
    }).unsubscribe();

  }));

  it('must obtain the user', inject([UserMockRepository], (service: UserMockRepository) => {
    const response: UserMockEntity = {
      "createdAt": "2022-08-09T20:51:19.571Z",
      "name": "Rene Kautzer",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/151.jpg",
      "password": "e72rglc0_gJUcsn",
      "email": "Ansel53@gmail.com",
      "id": "2"
    };

    service.getUserById('2').subscribe(user => {
      expect(user.email).toEqual(response.email);
      expect(user.name).toEqual(response.name);
    }).unsubscribe();

  }));

});

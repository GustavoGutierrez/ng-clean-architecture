import { inject, TestBed } from '@angular/core/testing';
import { UserEntity } from '@core/entities/user.entity';

import { UserMockRepository } from '@data/repository/user-mock-repository';
import { toArray } from 'rxjs';

describe('UserMockRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
      ],
      imports: [
      ],
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
    .subscribe((users: UserEntity[]) => {
      expect(users.length).toBe(3);
    }).unsubscribe();

  }));

  it('must obtain the user', inject([UserMockRepository], (service: UserMockRepository) => {
    const response: UserEntity = {
      "createdAt": "2022-08-09T20:51:19.571Z",
      "name": "Rene Kautzer",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/151.jpg",
      "password": "e72rglc0_gJUcsn",
      "email": "Ansel53@gmail.com",
      "id": "2"
    };

    service.getUserById('2').subscribe((user: UserEntity) => {
      expect(user.email).toEqual(response.email);
      expect(user.name).toEqual(response.name);
    }).unsubscribe();

  }));

});

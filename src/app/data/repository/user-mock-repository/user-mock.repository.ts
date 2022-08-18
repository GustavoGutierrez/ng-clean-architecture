import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import {  filter, map } from 'rxjs/operators';

import { UserRepository } from '@core/repositories/user.repository';
import { UserMockRepositoryMapper } from '@data/repository/user-mock-repository';
import { UserEntity } from '@core/entities/user.entity';
import { UserModel } from '@core/domain';

@Injectable()
export class UserMockRepository extends UserRepository {

  private mapper = new UserMockRepositoryMapper();

  users: UserEntity[] = [
    {
    "createdAt": "2022-08-09T22:02:00.842Z",
    "name": "Jody Murazik",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/734.jpg",
    "password": "Q6MGsGGKBX3GVgm",
    "email": "Danial.Gerhold18@hotmail.com",
    "id": "1"
  },
  {
    "createdAt": "2022-08-09T20:51:19.571Z",
    "name": "Rene Kautzer",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/151.jpg",
    "password": "e72rglc0_gJUcsn",
    "email": "Ansel53@gmail.com",
    "id": "2"
  },
  {
    "createdAt": "2022-08-09T19:13:36.566Z",
    "name": "Bobbie Schmidt",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/785.jpg",
    "password": "mg8eF1jyqcz3ulA",
    "email": "Albertha56@yahoo.com",
    "id": "3"
  }
  ];

  constructor() {
    super();
  }

  getUserById(id: string): Observable<UserModel> {
    return from(this.users)
    .pipe(filter(
      (elephant: UserEntity | any): boolean => {
        return elephant.id === id;
      })
    )
    .pipe(map(this.mapper.mapFrom));
  }

  getAllUsers(): Observable<UserModel> {
    return from(this.users)
      .pipe(map(<any>this.mapper.mapFrom));
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { mergeMap, map } from 'rxjs/operators';
import { UserWebRepositoryMapper } from './user-web-repository-mapper';
import { UserRepository } from 'src/app/core/repositories/user.repository';
import { UserModel } from 'src/app/core/domain/user.model';
import { UserWebEntity } from './user-web-entity';

@Injectable({
  providedIn: 'root'
})
export class UserWebRepository extends UserRepository {

  mapper = new UserWebRepositoryMapper();

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  getUserById(id: string): Observable<UserModel> {
    return this.http
      .get<UserWebEntity>('https://5dd2cbc26625890014a6e0fc.mockapi.io/api/gustavo/users/${id}')
      .pipe(map(this.mapper.mapFrom));
  }

  getAllUsers(): Observable<UserModel> {
    // get all users from the api
    return this.http
      .get<UserWebEntity[]>('https://5dd2cbc26625890014a6e0fc.mockapi.io/api/gustavo/users')
      .pipe(
        mergeMap((users: UserWebEntity[]) => {
          return users;
        }),
        map(this.mapper.mapFrom)
      );
  }
}

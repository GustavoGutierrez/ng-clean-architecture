import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { mergeMap, map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { UserRepository } from '@core/repositories/user.repository';
import { UserModel } from '@core/domain/user.model';
import { UserEntity } from '@core/entities/user.entity';
import { UserWebRepositoryMapper } from './user-web-repository-mapper';

@Injectable()
export class UserWebRepository extends UserRepository {

  mapper = new UserWebRepositoryMapper();

  constructor(
    private http: HttpClient
  ) {
    super();
    this.apiUrl = environment.apiUrl;
  }

  getUserById(id: string): Observable<UserModel> {
    return this.http
      .get<UserEntity>(`${this.apiUrl}/users/${id}`)
      .pipe(map(this.mapper.mapFrom));
  }

  getAllUsers(): Observable<UserModel> {
    return this.http
      .get<UserEntity[]>(`${this.apiUrl}/users`)
      .pipe(
        mergeMap((users: UserEntity[]) => {
          return users;
        }),
        map(this.mapper.mapFrom)
      );
  }
}

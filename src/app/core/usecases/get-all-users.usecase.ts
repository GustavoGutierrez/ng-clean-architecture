import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRepository } from '@core/repositories/user.repository';
import { UserModel } from '@core/domain/user.model';
import { UseCase } from '@core/base/use-case';

@Injectable({
  providedIn: 'root'
})
export class GetAllUsersUsecase implements UseCase<void, UserModel> {

  constructor(private userRepository: UserRepository) { }

  execute(params: void): Observable<UserModel> {
    return this.userRepository.getAllUsers();
  }
}

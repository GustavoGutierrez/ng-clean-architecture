import { Injectable } from '@angular/core';
import { UseCase } from '../base/use-case';
import { UserModel } from '../domain/user.model';
import { Observable } from 'rxjs';
import { UserRepository } from '../repositories/user.repository';

@Injectable({
  providedIn: 'root'
})
export class GetAllUsersUsecase implements UseCase<void, UserModel> {

  constructor(private userRepository: UserRepository) { }

  execute(params: void): Observable<UserModel> {
    return this.userRepository.getAllUsers();
  }
}

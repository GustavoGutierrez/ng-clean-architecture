import { Injectable } from '@angular/core';
import { UseCase } from '../base/use-case';
import { Observable } from 'rxjs';
import { UserRepository } from '../repositories/user.repository';
import { UserModel } from '../domain/user.model';

@Injectable({
  providedIn: 'root'
})
export class GetUserByIdUsecase implements UseCase<number, UserModel> {

  constructor(private userRepository: UserRepository) { }

  execute(params: number): Observable<UserModel> {
    return this.userRepository.getUserById(params);
  }
}

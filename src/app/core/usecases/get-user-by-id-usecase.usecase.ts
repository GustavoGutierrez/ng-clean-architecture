import { Injectable } from '@angular/core';
import { UseCase } from '../base/use-case';
import { Observable } from 'rxjs';
import { UserRepository } from '../repositories/user.repository';
import { UserModel } from '../domain/user.model';

@Injectable({
  providedIn: 'root'
})
export class GetUserByIdUsecase implements UseCase<string, UserModel> {

  constructor(private userRepository: UserRepository) { }

  execute(id: string): Observable<UserModel> {
    return this.userRepository.getUserById(id);
  }
}

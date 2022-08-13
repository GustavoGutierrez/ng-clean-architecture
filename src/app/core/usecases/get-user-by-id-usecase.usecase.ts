import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserRepository } from '@core/repositories/user.repository';
import { UseCase } from '@core/base/use-case';
import { UserModel } from '@core/domain/user.model';

@Injectable({
  providedIn: 'root'
})
export class GetUserByIdUsecase implements UseCase<string, UserModel> {

  constructor(private userRepository: UserRepository) { }

  execute(id: string): Observable<UserModel> {
    return this.userRepository.getUserById(id);
  }
}

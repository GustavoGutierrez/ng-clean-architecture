import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '@core/domain/user.model';
import { UseCase } from '@core/base/use-case';
import { Store } from '@ngxs/store';
import { UserState } from '@state/user/user.state';
import { CleanUsersAction, GetUsersAction } from '@state/user/user.actions';

@Injectable({
  providedIn: 'root'
})
export class GetAllUsersUsecase implements UseCase<void, UserModel[]> {

  constructor(private store: Store) { }

  execute(params: void): Observable<UserModel[]> {
    this.store.dispatch(new CleanUsersAction());
    this.store.dispatch(new GetUsersAction());

    return this.store.select(UserState.getUsersList);
  }
}

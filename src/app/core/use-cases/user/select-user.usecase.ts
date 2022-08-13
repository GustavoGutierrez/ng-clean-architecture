import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '@core/domain/user.model';
import { UseCase } from '@core/base/use-case';
import { Store } from '@ngxs/store';
import { UserState } from '@state/user/user.state';
import { SelectUserAction } from '@state/user/user.actions';

@Injectable({
  providedIn: 'root'
})
export class SelectUserUsecase implements UseCase<UserModel, (UserModel | null)> {

  constructor(private store: Store) { }

  execute(user: UserModel): Observable<UserModel | null> {
    this.store.dispatch(new SelectUserAction(user));

    return this.store.select(UserState.getUserSelected);
  }
}

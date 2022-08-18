import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UserModel } from '@core/domain';
import { environment } from '@environments/environment';
import { UserRepository } from '@core/repositories';
import { CleanUsersAction, GetUsersAction, SelectUserAction } from './user.actions';

export class UserStateModel {
  constructor(
    public list: UserModel[],
    public selected: UserModel | null,
    public error?: string) { }
}

const defaults = {
  list: [],
  selected: null,
  error: '',
};

@State<UserStateModel>({
  name: `${environment.projectName}User`,
  defaults
})
@Injectable()
export class UserState {

  constructor(private readonly userRepository: UserRepository) { }

  @Selector()
  static getUsersList(state: UserStateModel): UserModel[] {
    return state.list;
  }

  @Selector()
  static getUserSelected(state: UserStateModel): UserModel | null {
    return state.selected;
  }

  @Selector()
  static error(state: UserStateModel): string | undefined {
    return state.error;
  }

  @Action(GetUsersAction)
  getUsers({ getState, setState }: StateContext<UserStateModel>, { payload }: GetUsersAction): Observable<UserModel> {
    return this.userRepository
    .getAllUsers()
    .pipe(
      tap((user: UserModel) => {
        const state = getState();
        setState({ ...state, list: [...state.list, user] });
      })
    );
  }

  @Action(CleanUsersAction)
  cleanUsers({ getState, setState }: StateContext<UserStateModel>): void{
    const state = getState();
    setState({ ...state, list: [] });
  }

  @Action(SelectUserAction)
  selectUser(
    { getState, setState }: StateContext<UserStateModel>,
    { payload }: SelectUserAction
  ) {
    const state = getState();
    setState({
      ...state,
      selected: payload,
    });
  }
}

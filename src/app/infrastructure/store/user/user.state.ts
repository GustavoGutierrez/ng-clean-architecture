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
  creanUsers({ getState, setState }: StateContext<UserStateModel>): void{
    const state = getState();
    setState({ ...state, list: [] });
  }

  // @Action(CreateUserAction)
  // addUser({ getState, setState }: StateContext<UserStateModel>, { payload }: CreateUserAction): Observable<{ message?: string, data?: UserModel }> {
  //   return this.userRepository.create(payload).pipe(
  //     tap((response: { message: string, data: UserModel }) => {
  //       const state = getState();
  //       setState({ users: [...state.users, payload.data] });
  //     })
  //   );
  // }

  // @Action(UpdateUserAction)
  // updateUser({ getState, setState }: StateContext<UserStateModel>, { payload }: UpdateUserAction): Observable<{ message: string, data: UserModel }> {
  //   return this.userRepository.update(payload.id, payload).pipe(
  //     tap((response: { message: string, data: UserModel }) => {
  //       const state = getState();

  //       if (state.users) {
  //         const users: any = state.users;

  //         const newState = users.filter((user: UserModel, index: number) => payload.id !== user.id);


  //         setState({ ...state, users: [...newState, response.data] });
  //       }

  //     })
  //   );
  // }

  // @Action(DeleteUserAction)
  // deleteBook(
  //   { getState, patchState }: StateContext<UserStateModel>,
  //   { id }: DeleteUserAction
  // ): Observable<void | { message: string }> {
  //   return this.userRepository.delete(id).pipe(
  //     tap((response: void | { message: string }) => {
  //       const state = getState();
  //       const users = state.users;

  //       const newState = users?.filter((user: UserModel, index: number) => id !== user.id);

  //       patchState({ ...state, users: [...newState] });
  //     })
  //   );
  // }

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

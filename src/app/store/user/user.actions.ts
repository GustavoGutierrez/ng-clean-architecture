import { UserModel } from "@core/domain";

export class CreateUserAction {
  static readonly type = '[User] Create User';
  constructor(public payload: UserModel) { }
}

export class GetUsersAction {
  static readonly type = '[User] Get Users';
  constructor(public payload?: any) { }
}

export class CleanUsersAction {
  static readonly type = '[User] Clean Users';
  constructor() { }
}

export class UpdateUserAction {
  static readonly type = '[User] Update';
  constructor(public payload: UserModel) { }
}

export class DeleteUserAction {
  static readonly type = '[User] Delete';
  constructor(public id: string) { }
}

export class SelectUserAction {
  static readonly type = '[User] Select User';
  constructor(public payload: UserModel) { }
}

export class ResetSelectedUserAction {
  static readonly type = '[User] Reset Selected User';
}

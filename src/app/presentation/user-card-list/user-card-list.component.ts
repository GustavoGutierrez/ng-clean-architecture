import { Component, OnDestroy } from '@angular/core';
import { UserModel } from '@core/domain';
import { GetAllUsersUsecase, SelectUserUsecase } from '@core/use-cases/user';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card-list.component.html',
  styleUrls: []
})
export class UserCardListComponent implements OnDestroy {
  users$: Observable<UserModel[]> | undefined;
  userSelected$: Observable<UserModel | null> | undefined;

  constructor(
    private getAllUsers: GetAllUsersUsecase,
    private selectUser: SelectUserUsecase,
    ) {
  }

  updateUsers() {
    this.users$ = this.getAllUsers.execute();
  }

  onSelect(user: UserModel) {
    this.userSelected$ = this.selectUser.execute(user);
  }

  ngOnDestroy(): void {
  }
}

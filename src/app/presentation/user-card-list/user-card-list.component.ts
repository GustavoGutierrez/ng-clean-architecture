import { Component } from '@angular/core';
import { UserModel } from '../../core/domain/user.model';
import { GetAllUsersUsecase } from '../../core/usecases/get-all-users.usecase';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card-list.component.html',
  styleUrls: []
})
export class UserCardListComponent {

  users: Array<UserModel>;

  constructor(private getAllUsers: GetAllUsersUsecase) {
    this.users = [];
  }

  updateUsers() {
    this.users = [];
    this.getAllUsers.execute().subscribe((user: UserModel) => {
      this.users.push(user);
    });
  }

  onSelect(user: UserModel) {
    console.log(user);
  }
}

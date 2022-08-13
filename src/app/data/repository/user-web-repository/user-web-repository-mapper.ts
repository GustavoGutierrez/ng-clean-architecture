import { UserModel } from '@core/domain/user.model';
import { Mapper } from '@core/base/mapper';
import { UserWebEntity } from '@repository/user-web-repository';

export class UserWebRepositoryMapper extends Mapper <UserWebEntity, UserModel> {
  mapFrom(param: UserWebEntity): UserModel {
    return {
      id: param.id,
      name: param.name,
      email: param.email,
      avatar: param.avatar,
      createdAt: param.createdAt
    };
  }

  mapTo(param: UserModel): UserWebEntity {
    return {
      id: '0',
      name: param.name,
      email: param.email,
      avatar: param.avatar,
      createdAt: param.createdAt
    };
  }
}

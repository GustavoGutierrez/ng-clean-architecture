import { UserModel } from '@core/domain/user.model';
import { Mapper } from '@core/base/mapper';
import { UserEntity } from '@core/entities/user.entity';

export class UserWebRepositoryMapper extends Mapper <UserEntity, UserModel> {
  mapFrom(param: UserEntity): UserModel {
    return {
      id: param.id,
      name: param.name,
      email: param.email,
      avatar: param.avatar,
      createdAt: param.createdAt
    };
  }

  mapTo(param: UserModel): UserEntity {
    return {
      id: '0',
      name: param.name,
      email: param.email,
      avatar: param.avatar,
      createdAt: param.createdAt
    };
  }
}

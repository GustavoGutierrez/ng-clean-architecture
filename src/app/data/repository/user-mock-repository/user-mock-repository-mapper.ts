import { UserModel } from '../../../core/domain/user.model';
import { Mapper } from '../../../core/base/mapper';
import { UserMockEntity } from './user-mock-entity';

export class UserMockRepositoryMapper extends Mapper <UserMockEntity, UserModel> {
  mapFrom(param: UserMockEntity): UserModel {
    return {
      id: param.id,
      name: param.name,
      email: param.email,
      avatar: param.avatar,
      createdAt: param.createdAt
    };
  }

  mapTo(param: UserModel): UserMockEntity {
    return {
      id: param.id,
      name: param.name,
      email: param.email,
      avatar: param.avatar,
      createdAt: param.createdAt
    };
  }
}

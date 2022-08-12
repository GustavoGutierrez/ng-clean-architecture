import { Observable } from 'rxjs';
import { UserModel } from '../domain/user.model';

export abstract class UserRepository {
  abstract getUserById(id: string): Observable<UserModel>;
  abstract getAllUsers(): Observable<UserModel>;
}

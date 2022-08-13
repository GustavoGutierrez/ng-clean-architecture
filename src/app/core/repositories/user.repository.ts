import { Observable } from 'rxjs';
import { UserModel } from '@core/domain/user.model';

export abstract class UserRepository {
  protected apiUrl: string = '';

  abstract getUserById(id: string): Observable<UserModel>;
  abstract getAllUsers(): Observable<UserModel>;
}

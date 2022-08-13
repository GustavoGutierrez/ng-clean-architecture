import { TestBed } from "@angular/core/testing";
import { UserRepository } from "@core/repositories/user.repository";
import { GetAllUsersUsecase } from "@core/usecases/get-all-users.usecase";
import { UserMockRepository } from "@data/repository/user-mock-repository";
import { UserCardListComponent } from "./user-card-list.component";

describe('UserCardListComponent', () => {
  let getAllUsers: GetAllUsersUsecase;
  let comp: UserCardListComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // provide the component-under-test and dependent service
      providers: [
        UserCardListComponent,
        {provide: UserRepository, useClass: UserMockRepository},
        GetAllUsersUsecase
      ]
    });
    // inject both the component and the dependent service.
    getAllUsers = TestBed.inject(GetAllUsersUsecase);
    comp = TestBed.inject(UserCardListComponent);
  });

  it('button must be clicked #updateUsers', () => {
    expect(comp.users.length).toBe(0);
    comp.updateUsers();
    expect(comp.users.length).toBe(3);
  });

});

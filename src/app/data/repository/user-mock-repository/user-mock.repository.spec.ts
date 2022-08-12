import { inject, TestBed } from '@angular/core/testing';

import { UserMockRepository } from './user-mock.repository';

describe('UserRepositoryMockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserMockRepository]
    });
  });

  it('should be created', inject([UserMockRepository], (service: UserMockRepository) => {
    expect(service).toBeTruthy();
  }));
});

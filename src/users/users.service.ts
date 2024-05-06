import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'User 1',
    },
  ];

  getUsers() {
    return this.users;
  }
}

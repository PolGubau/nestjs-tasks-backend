import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
  private tasks = [
    {
      id: 1,
      title: 'Task 1',
      description: 'Description 1',
    },
  ];

  getTasks() {
    return this.tasks;
  }
}

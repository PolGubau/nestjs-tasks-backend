import { Controller, Get } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get('/')
  getAllTasks() {
    const tasks = this.taskService.getTasks();

    return {
      tasks,
    };
  }
}

import { Controller, Get } from '@nestjs/common';

@Controller('projects')
export class ProjectsController {
  @Get('/')
  getAllProjects() {
    const projects = [
      {
        id: 1,
        name: 'Project 1',
        description: 'Project 1 description',
        done: true,
      },
      {
        id: 2,
        name: 'Project 2',
        description: 'Project 2 description',
        done: false,
      },
      {
        id: 3,
        name: 'Project 3',
        description: 'Project 3 description',
        done: false,
      },
    ];

    return {
      projects,
    };
  }
}

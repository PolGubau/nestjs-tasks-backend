import { Module } from '@nestjs/common';
import { TaskModule } from './tasks/task.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TestModule } from './test/test.module';

@Module({
  imports: [TaskModule, ProjectsModule, AuthModule, UsersModule, TestModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

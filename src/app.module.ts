import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config'
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';
import { TimeBlockModule } from './time-block/time-block.module';
import { PomodoroModule } from './pomodoro/pomodoro.module';

@Module({
  imports: [AuthModule, ConfigModule.forRoot(), UserModule, TaskModule, TimeBlockModule, PomodoroModule]
})
export class AppModule {}

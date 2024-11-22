import { Module } from '@nestjs/common'
import { PomodoroController } from './pomodoro.controller'
import { PomodoroService } from './pomodoro.service'
import { PrismaService } from 'src/prisma.service'

@Module({
  controllers: [PomodoroController],
  providers: [PomodoroService, PrismaService]
})
export class PomodoroModule {}

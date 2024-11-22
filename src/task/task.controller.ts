import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common'
import { TaskService } from './task.service'
import { Auth } from 'src/auth/decorators/auth.decortor'
import { CurrentUser } from 'src/auth/decorators/user.decorator'
import { TaskDto } from './dto/task.dto'

@Controller('user/task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  @Auth()
  async getAll(@CurrentUser('id') userId: string) {
    return this.taskService.getAll(userId)
  }

  @Post()
  @HttpCode(200)
  @UsePipes(new ValidationPipe())
  @Auth()
  async create(@Body() dto: TaskDto, @CurrentUser('id') userId: string) {
    return this.taskService.create(dto, userId)
  }

  @Put(':id')
  @HttpCode(200)
  @UsePipes(new ValidationPipe())
  @Auth()
  async update(
      @Body() dto: TaskDto, 
      @CurrentUser('id') userId: string, 
      @Param('id') id: string) 
  {
    return this.taskService.update(dto, id, userId)
  }

  @Delete(':id')
  @HttpCode(200)
  @Auth()
  async delete(@Param('id') id: string) {
    return this.taskService.delete(id)
  }

}

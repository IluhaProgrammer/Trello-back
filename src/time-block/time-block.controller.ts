import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { TimeBlockService } from './time-block.service';
import { Auth } from 'src/auth/decorators/auth.decortor'
import { CurrentUser } from 'src/auth/decorators/user.decorator'
import { timeBlockDto } from './dto/time-block.dto'
import { updateOrderDto } from './dto/update-order.dto'

@Controller('user/time-blocks')
export class TimeBlockController {
  constructor(private readonly timeBlockService: TimeBlockService) {}

  @Get()
  @Auth()
  async getAll(@CurrentUser('id') userId: string) {
    return this.timeBlockService.getAll(userId)
  }

  @Post()
  @HttpCode(200)
  @Auth()
  @UsePipes(new ValidationPipe())
  async create(@Body() dto: timeBlockDto, @CurrentUser('id') userId: string) {
    return this.timeBlockService.create(userId, dto)
  }

  @Put(':id')
  @HttpCode(200)
  @Auth()
  @UsePipes(new ValidationPipe())
  async update(@Body() dto: timeBlockDto, @CurrentUser('id') userId: string, @Param('id') id: string) {
    return this.timeBlockService.update(dto, userId, id)
  }

  @Delete(':id')
  @HttpCode(200)
  @Auth()
  async delete(@Param('id') id: string, @CurrentUser('id') userId: string) {
    return this.timeBlockService.delete(id, userId)
  }

  @HttpCode(200)
  @UsePipes(new ValidationPipe())
  @Put('update-order')
  @Auth()
  updateOrder(@Body() updateOrderDto: updateOrderDto) {
    return this.timeBlockService.updateOrder(updateOrderDto.ids)
  }

}

import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
@Controller('messages')
export class MessagesController {
  @Get()
  getList() {}
  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log(body);
  }
  @Get('/:note')
  getMessage(@Param('note') id: string) {
    console.log(id);
  }
}

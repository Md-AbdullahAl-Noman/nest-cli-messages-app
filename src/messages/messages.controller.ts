import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  getList() {}
  @Post()
  createMessage(@Body() body: any) {
    console.log(body);
  }
  @Get('/:note')
  getMessage(@Param('note') id: string) {
    console.log(id);
  }
}

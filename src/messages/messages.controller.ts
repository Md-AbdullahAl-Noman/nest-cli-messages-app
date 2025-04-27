import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';
@Controller('messages')
export class MessagesController {
  //now need to inject the service,declare a property of controller class messagesService
  messagesService: MessagesService;
  constructor() {
    //dont use this in real life apps use dependency injection
    this.messagesService = new MessagesService();
  }
  @Get()
  getList() {
    return this.messagesService.findAll(); //returning the result of findAll method otherwise the request will never get a response
  }
  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body.message);
    //body .message is the message property of the body object described in the create-message.dto.ts file
  }
  @Get('/:id')
  getMessage(@Param('id') id: string) {
    return this.messagesService.findOne(id);
  }
}

import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {} //injecting the messages service into the controller as argument says it is a dependency injection

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
  async getMessage(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id); //find one is returing a promise to us as need to open file and read it so use async await
    if (!message) {
      throw new NotFoundException('Message not found'); //if message is not found throw an exception
    }
    return message; //if message is found return it
  }
}

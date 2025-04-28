import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { MessagesRepository } from './messages.repository';
@Module({ controllers: [MessagesController], providers: [MessagesService, MessagesRepository] }) //this decorator marks the class as a module that can be imported into other modules..things that can be used as dependencies in other classes
export class MessagesModule {}

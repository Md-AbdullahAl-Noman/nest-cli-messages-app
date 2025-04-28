import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';
@Injectable() //this decorator marks the class as a provider that can be injected into other classes or register in the di container
export class MessagesService {
  constructor(public readonly messagesRepo: MessagesRepository) {}

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }
  findAll() {
    return this.messagesRepo.findAll();
  }
  create(message: string) {
    return this.messagesRepo.create(message);
  }
}

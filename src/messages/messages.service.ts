import { MessagesRepository } from './messages.repository';
export class MessagesService {
  messagesRepo: MessagesRepository;
  constructor() {
    //service is creating its own dependency
    //dont do this in real life apps
    this.messagesRepo = new MessagesRepository();
  }

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

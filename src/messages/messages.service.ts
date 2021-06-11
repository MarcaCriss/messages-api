import { EditMessageDto } from './dtos/edit-message.dto';
import { CreateMessageDto } from './dtos/create-message.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { MessageEntity } from './entities';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(MessageEntity)
    private readonly messageRepository: Repository<MessageEntity>,
  ) {}

  async getAll(): Promise<MessageEntity[]> {
    return await this.messageRepository.find();
  }

  async createMessage(
    createMessageDto: CreateMessageDto,
  ): Promise<MessageEntity> {
    const message = this.messageRepository.create(createMessageDto);
    return await this.messageRepository.save(message);
  }

  async updateMessage(
    id: number,
    updateMessateDto: EditMessageDto,
  ): Promise<MessageEntity> {
    const message = await this.messageRepository.findOne(id);
    if (!message) throw new NotFoundException('No existe ese mensaje');
    const messageUpdated = Object.assign(message, updateMessateDto);
    return await this.messageRepository.save(messageUpdated);
  }

  async deleteMessage(id: number): Promise<any> {
    return await this.messageRepository.delete(id);
  }
}

import { MessagesService } from './messages.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateMessageDto, EditMessageDto } from './dtos';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messageService: MessagesService) {}
  @Get()
  getAll() {
    return this.messageService.getAll();
  }

  @Post()
  create(@Body() createMessageDto: CreateMessageDto) {
    return this.messageService.createMessage(createMessageDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() editMessageDto: EditMessageDto) {
    return this.messageService.updateMessage(id, editMessageDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.messageService.deleteMessage(id);
  }
}

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
  @Post()
  create(@Body() createMessasgeDto: CreateMessageDto) {
    return 'mensaje creado' + createMessasgeDto;
  }

  @Get()
  getAll() {
    return 'todos los mensajes';
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() editMessageDto: EditMessageDto) {
    return 'mensaje actualizado' + editMessageDto;
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return 'Mensaje eliminado';
  }
}

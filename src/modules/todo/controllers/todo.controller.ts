import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Param,
  Body,
} from '@nestjs/common';
import { Todo } from '../entities/todo.entity';
import { CreateDto, UpdateDto } from './dto';

// GetOne
//GetMany
//Post(Create or Update)
//Delete
@Controller('rest/todo')
export class TodoController {
  @Get()
  getAllAction(): string {
    return 'Get all cations!';
  }

  @Get(':id')
  getOneAction(@Param('id') id: string): string {
    return 'Get one action by id: ' + id;
  }

  @Post()
  createAction(@Body() todo: CreateDto): CreateDto {
    console.log(todo);
    return todo;
  }

  @Put()
  updateAction(@Param('id') id: string, @Body() todo: UpdateDto): UpdateDto {
    console.log('Serch by ID: ' + id);
    console.log(todo, 'saved');
    return todo;
  }

  @Delete(':id')
  deleteAction(@Param('id') id: string): string {
    return 'Delete only one toDoby id: ' + id;
  }
}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';

@Module({ imports: [TypeOrmModule.forFeature([Todo])] })
export class TodoModule {}

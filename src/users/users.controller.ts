import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateCategoryDto } from './dto/create-category.dto';

import { UpdateUserDto } from './dto/update-user.dto';
import {
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/make')
  @UsePipes(ValidationPipe)
  create(@Body() create: CreateUserDto) {
    return this.usersService.createUser(create);
  }

  @Post('/createcategory')
  @UsePipes(ValidationPipe)
  createCategory(@Body() createCategory: CreateCategoryDto) {
    return this.usersService.createCategory(createCategory);
  }
  
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get('cat/all')
  findAllCategory() {
    return this.usersService.findAllCat();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.finds(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}

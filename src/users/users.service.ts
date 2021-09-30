import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CategoryRepository, UserRepository } from './users.repository';

@Injectable()
export class UsersService {
  
  constructor(@InjectRepository(UserRepository)
   private UserRepository:UserRepository, private CategoryRepository:CategoryRepository,
   ){

  }

  async createUser(user:CreateUserDto){
    return await this.UserRepository.save(user)
  }

  async createCategory(category:CreateCategoryDto){
    return await this.CategoryRepository.save(category)
  }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }
  async finds(id) {
    return await this.UserRepository.findByIds(id);
  }
  async findAll() {
    return await this.UserRepository.find();
  }

  async findAllCat() {
    return await this.CategoryRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

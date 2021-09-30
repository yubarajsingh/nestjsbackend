import { EntityRepository, Repository } from "typeorm";
import { Category } from "./entities/category.entity";
import {User} from './entities/user.entity'

@EntityRepository(User)
export class UserRepository extends Repository<User>{

}

@EntityRepository(Category)
export class CategoryRepository extends Repository<Category>{

}
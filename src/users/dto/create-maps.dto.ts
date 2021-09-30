import { IsDate, isString, IsString } from "class-validator";
import { Category } from "../entities/category.entity";
import { User } from "../entities/user.entity";

export class CreateMapDto {
    @IsString()
    longitude:string;
    
    @IsString()
    email:string;
    
    @IsString() 
    latitude:string;
    
    @IsDate()
    createdDate:Date;
    
    @IsString()
    category:Category;

    @IsString()
    user:User
    
    @IsString()
    title:string

    @IsString()
    content:string

}

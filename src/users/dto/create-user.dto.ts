import { IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    fullName:string;
    
    @IsString()
    email:string;
    
    @IsString() 
    address:string;
    
    @IsString()
    phone:string;
    
    

}

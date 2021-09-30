import { BaseEntity, Column, Entity,PrimaryGeneratedColumn,OneToOne, JoinColumn} from "typeorm";
import { User } from "./user.entity";
@Entity('auth')
export class auth extends BaseEntity {

@PrimaryGeneratedColumn({
comment:'this is unique identifier',
})
id:number;

@OneToOne(()=>User,User=>User.id)
@JoinColumn()
user:User;

@Column({type:"varchar"})
password:string;

}

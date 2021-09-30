import { BaseEntity, Column, Entity,PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User extends BaseEntity {

@PrimaryGeneratedColumn({
comment:'this is unique identifier',
})

id:number;

@Column({type:"varchar"})
fullName:string;

@Column({type:"varchar"})
email:string;

@Column({type:"varchar"})
address:string;

@Column({type:"varchar"})
phone:string;

}

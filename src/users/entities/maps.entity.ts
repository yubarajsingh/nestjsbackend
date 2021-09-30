import { BaseEntity, Column, Entity,JoinColumn,JoinTable,ManyToOne,OneToMany,OneToOne,PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { Category } from "./category.entity";

@Entity('maps')
export class Maps extends BaseEntity {

@PrimaryGeneratedColumn({
comment:'this is unique identifier',
})
id:number;

@Column({type:"integer"})
longitude:BigInteger;

@Column({type:"integer"})
latitude:bigint;

@Column({type:"varchar"})
createdDate:string;

@OneToOne(()=>User,user=>user.id)
@JoinColumn()
user:User;

@ManyToOne(()=>Category,category=>category.maps,{onDelete:'CASCADE',onUpdate:'CASCADE'})
category:Category;

@Column({type:"text"})
title:string;

@Column({type:"text"})
content:string;

}

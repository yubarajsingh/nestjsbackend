import { map } from "rxjs";
import { BaseEntity, Column, Entity,PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Maps } from "./maps.entity";

@Entity('category')
export class Category extends BaseEntity {

@PrimaryGeneratedColumn({
comment:'this is unique identifier',
})
id:number;

@Column({type:"varchar"})

categoryName:string;
@OneToMany(() => Maps, maps => maps.category)
maps: Maps;
}

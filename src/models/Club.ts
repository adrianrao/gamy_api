import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { User } from "./User";

@Entity()
export class Club extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  address: string;

  @Column()
  phone: string;

  @Column()
  rate: number;

  @ManyToMany((_) => User)
  @JoinTable()
  users: User[];
}

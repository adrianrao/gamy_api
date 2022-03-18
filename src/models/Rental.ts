import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Rental extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  time: string;

  @Column()
  day: string;
}

import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinTable,
} from "typeorm";
import { Club } from "./Club";
import { CourtType } from "./CourtType";
@Entity()
export class Court extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dimension: string;

  @Column()
  rate: number;

  @ManyToOne((_) => CourtType, (courtType) => courtType.courts)
  courtType: CourtType;

  @ManyToMany((_) => Club)
  @JoinTable()
  clubs: Club[];
}

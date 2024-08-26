import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
@Entity()
export class Country {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column({ unique: true })
  code!: string;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column()
  emoji!: string;

  @Field()
  @Column()
  continentCode!: string;
}

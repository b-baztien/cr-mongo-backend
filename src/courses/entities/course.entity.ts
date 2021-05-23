import { ObjectID } from 'mongodb';
import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Course {
  @ObjectIdColumn()
  id?: ObjectID;

  @Column()
  number: string;

  @Column()
  title: string;
}

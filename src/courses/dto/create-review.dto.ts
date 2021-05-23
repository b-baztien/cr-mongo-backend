import { IsInt, IsNotEmpty } from 'class-validator';
import { ObjectID } from 'mongodb';

export class CreateReviewDto {
  @IsNotEmpty()
  comments: string;

  @IsInt()
  score: number;

  courseId?: ObjectID;
}

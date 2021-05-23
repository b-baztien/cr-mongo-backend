import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { ObjectID } from 'mongodb';

export class ParseObjectIdPipe implements PipeTransform<any, ObjectID> {
  public transform(value: any, metadata: ArgumentMetadata): ObjectID {
    try {
      const transformedObjectId: ObjectID = ObjectID.createFromHexString(value);
      return transformedObjectId;
    } catch (error) {
      throw new BadRequestException('แปลงค่าไม่ได้');
    }
  }
}

import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { ObjectID } from 'mongodb';
import { ParseObjectIdPipe } from 'src/common/pipes';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { CreateReviewDto } from './dto/create-review.dto';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  async findAll() {
    return this.courseService.findAll();
  }

  @Post()
  async create(@Body() createCourseDto: CreateCourseDto) {
    return this.courseService.create(createCourseDto);
  }

  @Get(':courseId/reviews')
  async findAllReview(
    @Param('courseId', ParseObjectIdPipe) courseId: ObjectID,
  ) {
    return this.courseService.findAllReview(courseId);
  }

  @Post(':courseId/reviews')
  async createReview(
    @Param('courseId', ParseObjectIdPipe) courseId: ObjectID,
    @Body() createReviewDto: CreateReviewDto,
  ) {
    createReviewDto.courseId = courseId;
    return this.courseService.createReview(createReviewDto);
  }
}

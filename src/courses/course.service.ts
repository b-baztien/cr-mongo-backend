import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectID } from 'mongodb';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { CreateReviewDto } from './dto/create-review.dto';
import { Course } from './entities/course.entity';
import { Review } from './entities/review.entity';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private courseRepository: Repository<Course>,
    @InjectRepository(Review)
    private reviewRepository: Repository<Review>,
  ) {}

  async findAll(): Promise<Course[]> {
    return this.courseRepository.find();
  }

  async create(createCourseDto: CreateCourseDto) {
    return this.courseRepository.save(createCourseDto);
  }

  async findAllReview(courseId: ObjectID) {
    return this.reviewRepository.find({ where: { courseId: courseId } });
  }

  async createReview(createReviewDto: CreateReviewDto) {
    return this.reviewRepository.save(createReviewDto);
  }
}

import { Injectable } from '@nestjs/common';
import { CreateQuizAnswerDto } from './dto/create-quiz_answer.dto';
import { UpdateQuizAnswerDto } from './dto/update-quiz_answer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { QuizAnswer } from './entities/quiz_answer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuizAnswersService {
  constructor(
    @InjectRepository(QuizAnswer)
    private readonly quizAnswers: Repository<QuizAnswer>,
  ) {}
  create(createQuizAnswerDto: CreateQuizAnswerDto) {
    return this.quizAnswers.save(createQuizAnswerDto);
  }

  findAll() {
    return this.quizAnswers.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} quizAnswer`;
  }

  update(id: number, updateQuizAnswerDto: UpdateQuizAnswerDto) {
    return `This action updates a #${id} quizAnswer`;
  }

  remove(id: number) {
    return `This action removes a #${id} quizAnswer`;
  }
}

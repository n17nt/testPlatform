import { Injectable } from '@nestjs/common';
import { CreateQuizHistoryDto } from './dto/create-quiz_history.dto';
import { UpdateQuizHistoryDto } from './dto/update-quiz_history.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { QuizHistory } from './entities/quiz_history.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuizHistoryService {
  constructor(
    @InjectRepository(QuizHistory)
    private readonly quizHistoryRepo: Repository<QuizHistory>,
  ) {}
  create(createQuizHistoryDto: CreateQuizHistoryDto) {
    return this.quizHistoryRepo.save(createQuizHistoryDto);
  }

  findAll() {
    return this.quizHistoryRepo.find();
  }

  findOne(id: number) {
    return;
  }

  update(id: number, updateQuizHistoryDto: UpdateQuizHistoryDto) {
    return `This action updates a #${id} quizHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} quizHistory`;
  }
}

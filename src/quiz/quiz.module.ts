import { Module } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { QuizController } from './quiz.controller';
import { Quiz } from './entities/quiz.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subject } from 'src/subject/entities/subject.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Quiz, Subject])],
  controllers: [QuizController],
  providers: [QuizService],
})
export class QuizModule {}

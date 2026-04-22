import { Module } from '@nestjs/common';
import { QuizAnswersService } from './quiz_answers.service';
import { QuizAnswersController } from './quiz_answers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizAnswer } from './entities/quiz_answer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([QuizAnswer])],
  controllers: [QuizAnswersController],
  providers: [QuizAnswersService],
})
export class QuizAnswersModule {}

import { Module } from '@nestjs/common';
import { QuizHistoryService } from './quiz_history.service';
import { QuizHistoryController } from './quiz_history.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizHistory } from './entities/quiz_history.entity';

@Module({
  imports: [TypeOrmModule.forFeature([QuizHistory])],
  controllers: [QuizHistoryController],
  providers: [QuizHistoryService],
})
export class QuizHistoryModule {}

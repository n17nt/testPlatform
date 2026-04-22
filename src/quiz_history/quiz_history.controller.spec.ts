import { Test, TestingModule } from '@nestjs/testing';
import { QuizHistoryController } from './quiz_history.controller';
import { QuizHistoryService } from './quiz_history.service';

describe('QuizHistoryController', () => {
  let controller: QuizHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuizHistoryController],
      providers: [QuizHistoryService],
    }).compile();

    controller = module.get<QuizHistoryController>(QuizHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

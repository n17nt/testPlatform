import { Test, TestingModule } from '@nestjs/testing';
import { QuizHistoryService } from './quiz_history.service';

describe('QuizHistoryService', () => {
  let service: QuizHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuizHistoryService],
    }).compile();

    service = module.get<QuizHistoryService>(QuizHistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

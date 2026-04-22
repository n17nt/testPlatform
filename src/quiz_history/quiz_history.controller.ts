import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuizHistoryService } from './quiz_history.service';
import { CreateQuizHistoryDto } from './dto/create-quiz_history.dto';
import { UpdateQuizHistoryDto } from './dto/update-quiz_history.dto';

@Controller('quiz-history')
export class QuizHistoryController {
  constructor(private readonly quizHistoryService: QuizHistoryService) {}

  @Post()
  create(@Body() createQuizHistoryDto: CreateQuizHistoryDto) {
    return this.quizHistoryService.create(createQuizHistoryDto);
  }

  @Get()
  findAll() {
    return this.quizHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.quizHistoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuizHistoryDto: UpdateQuizHistoryDto) {
    return this.quizHistoryService.update(+id, updateQuizHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.quizHistoryService.remove(+id);
  }
}

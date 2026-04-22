import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Quiz } from './entities/quiz.entity';
import { Any, Repository } from 'typeorm';
import { Subject } from 'src/subject/entities/subject.entity';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz) private readonly quizRepo: Repository<Quiz>,
    @InjectRepository(Subject) private readonly SubRepo: Repository<Subject>,
  ) {}
  async create(createSubjectDto: CreateQuizDto) {
    const subject = this.quizRepo.create(createSubjectDto);
    await this.quizRepo.save(subject);
    return subject;
  }

  findAll() {
    return this.quizRepo.find({
      relations: ['subject'],
    });
  }

  findOne(id: number) {
    return this.quizRepo.findOne({
      where: { id },
      relations: ['subject'],
      select: {
        id: true,
        title: true,
        answer: true,
        variants: true,
        subject: true,
      },
    });
  }

  update(id: number, updateQuizDto: UpdateQuizDto) {
    return `This action updates a #${id} quiz`;
  }

  remove(id: number) {
    return `This action removes a #${id} quiz`;
  }
  async getQuizBySubjectId(id: number) {
    const subject = await this.SubRepo.findOne({
      where: { id },
    });
    if (!subject) throw new NotFoundException('Subject topilmadi');
    console.log(subject);

    const data = await this.quizRepo.find({
      where: { subject: subject.id },
      relations: ['subject'],
    });
    return data;
    // this.quizRepo.createQueryBuilder
  }
}

import { Injectable } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subject } from './entities/subject.entity';

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(Subject)
    private readonly subjectRepo: Repository<Subject>,
  ) {}
  async create(createSubjectDto: CreateSubjectDto) {
    const subject = this.subjectRepo.create({
      title: createSubjectDto.title,
      category: { id: createSubjectDto.categoryId },
    });
    await this.subjectRepo.save(subject);
    return subject;
  }

  findAll() {
    return this.subjectRepo.find({ relations: ['category'] });
  }

  async findOne(id: number) {
    return this.subjectRepo.findOne({ where: { id }, relations: ['category'] });
  }

  async update(id: number, updateSubjectDto: UpdateSubjectDto) {
    await this.subjectRepo.update(id, updateSubjectDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.subjectRepo.delete(id);
    return { message: 'Subject removed successfully' };
  }
}

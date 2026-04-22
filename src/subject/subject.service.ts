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
    const subject = this.subjectRepo.create(createSubjectDto);
    await this.subjectRepo.save(subject);
    return subject;
  }

  findAll() {
    return this.subjectRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} subject`;
  }

  update(id: number, updateSubjectDto: UpdateSubjectDto) {
    return `This action updates a #${id} subject`;
  }

  remove(id: number) {
    return `This action removes a #${id} subject`;
  }
}

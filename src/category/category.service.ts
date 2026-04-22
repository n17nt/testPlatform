import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepo: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const category = this.categoryRepo.create(createCategoryDto);
    await this.categoryRepo.save(category);
    return category;
  }

  async findAll() {
    return this.categoryRepo.find({ relations: ['subjects'] });
  }

  async findOne(id: number) {
    return this.categoryRepo.findOne({ where: { id }, relations: ['subjects'] });
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    await this.categoryRepo.update(id, updateCategoryDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.categoryRepo.delete(id);
    return { message: 'Category removed successfully' };
  }
}

import { Test, TestingModule } from '@nestjs/testing';
import { CategoryService } from './category.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';

describe('CategoryService', () => {
  let service: CategoryService;

  const mockRepository = {
    create: jest.fn(),
    save: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoryService,
        {
          provide: getRepositoryToken(Category),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<CategoryService>(CategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a category', async () => {
      const createCategoryDto = { name: 'Test Category' };
      const category = { id: 1, ...createCategoryDto };

      mockRepository.create.mockReturnValue(category);
      mockRepository.save.mockResolvedValue(category);

      const result = await service.create(createCategoryDto);

      expect(result).toEqual(category);
      expect(mockRepository.create).toHaveBeenCalledWith(createCategoryDto);
      expect(mockRepository.save).toHaveBeenCalledWith(category);
    });
  });

  describe('findAll', () => {
    it('should return an array of categories', async () => {
      const categories = [{ id: 1, name: 'Test Category' }];
      mockRepository.find.mockResolvedValue(categories);

      const result = await service.findAll();

      expect(result).toEqual(categories);
      expect(mockRepository.find).toHaveBeenCalled();
    });
  });
});

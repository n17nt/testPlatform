import { Test, TestingModule } from '@nestjs/testing';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';

describe('CategoryController', () => {
  let controller: CategoryController;
  let service: CategoryService;

  const mockCategoryService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoryController],
      providers: [
        {
          provide: CategoryService,
          useValue: mockCategoryService,
        },
      ],
    }).compile();

    controller = module.get<CategoryController>(CategoryController);
    service = module.get<CategoryService>(CategoryService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should call service.create with CreateCategoryDto', async () => {
      const createCategoryDto = { name: 'Test Category' };
      const category = { id: 1, ...createCategoryDto };

      mockCategoryService.create.mockResolvedValue(category);

      const result = await controller.create(createCategoryDto);

      expect(result).toEqual(category);
      expect(mockCategoryService.create).toHaveBeenCalledWith(createCategoryDto);
    });
  });

  describe('findAll', () => {
    it('should return an array of categories', async () => {
      const categories = [{ id: 1, name: 'Test Category' }];
      mockCategoryService.findAll.mockResolvedValue(categories);

      const result = await controller.findAll();

      expect(result).toEqual(categories);
    });
  });
});

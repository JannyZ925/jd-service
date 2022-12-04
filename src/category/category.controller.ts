import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CategoryService } from './category.service';
import { CategoryTree } from './entities/category.entity';

@ApiTags('分类')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @ApiOperation({
    summary: '获取分类树',
  })
  @ApiOkResponse({
    description: '分类树',
    type: CategoryTree,
  })
  @Get()
  findAll() {
    return this.categoryService.findAll();
  }
}

import { ApiProperty } from '@nestjs/swagger';

export class CategoryItem {
  @ApiProperty()
  id: string;
  name: string;
  children: CategoryItem[];
}

export class CategoryTree {
  @ApiProperty()
  list: CategoryItem[];
}

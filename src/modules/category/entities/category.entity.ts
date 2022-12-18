import { ApiProperty } from '@nestjs/swagger';

export class CategoryItem {
  @ApiProperty()
  catId: number;
  catName: string;
  catImage: string;
  children: CategoryItem[];
}

export class CategoryTree {
  @ApiProperty()
  list: CategoryItem[];
}
